import { useRef, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import Images from '../../assets/images.json'
import { Card } from "../Cards";
import { Container, ContainerImagesMove, ContainerImagesScroll, ContainerImagesScrollLeft, ContainerImagesScrollRight, DivRown } from "./styles";

interface IImage {
  image_id: number
  title: string
  url: string
}

export function Carrossel() {
  const [imageSelected, setImageSelected] = useState<IImage[]>([])
  const [isActive, setIsActive] = useState(false)
  
  const [checked, setChecked] = useState<boolean[]>(new Array(Images.length).fill(false))

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleRigthScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += containerRef.current.offsetWidth;
    }
  };
  
  const handleLeftScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
    }
  };

  function handleSelectImage(image: IImage) {
    var result = imageSelected.indexOf(image)
    const updatedCheckedState = checked.map((item, index) =>
      index === image.image_id ? !item : item
    );
    
    setChecked(updatedCheckedState)

    if(result !== -1) {
      imageSelected.splice(result, 1);
    } else {
      setImageSelected([...imageSelected, image])
      console.log(imageSelected)
    }
  }

  return (
    <Container>
      <DivRown>
        <button onClick={() => setIsActive(false)}>All images</button>
        <button onClick={() => setIsActive(true)}>Images Selected</button>
      </DivRown>
      {
        isActive 
        ?
        <ContainerImagesMove>
          <ContainerImagesScrollLeft
            onClick={handleLeftScroll}
          >
            <BiLeftArrow />
          </ContainerImagesScrollLeft>
          <ContainerImagesScroll ref={containerRef}>
            {imageSelected.map(image => (
              <div key={image.image_id} onClick={() => handleSelectImage(image)}>
                <Card checked={checked[image.image_id]} url={image.url} text={image.title}/>
              </div>
            ))}
          </ContainerImagesScroll>
          <ContainerImagesScrollRight onClick={handleRigthScroll}>
            <BiRightArrow />
          </ContainerImagesScrollRight>
        </ContainerImagesMove>
        :
        <ContainerImagesMove>
          <ContainerImagesScrollLeft
            onClick={handleLeftScroll}
          >
            <BiLeftArrow />
          </ContainerImagesScrollLeft>
          <ContainerImagesScroll ref={containerRef}>
            {Images.map(image => (
              <div key={image.image_id} onClick={() => handleSelectImage(image)}>
                <Card checked={checked[image.image_id]} url={image.url} text={image.title}/>
              </div>
            ))}
          </ContainerImagesScroll>
          <ContainerImagesScrollRight onClick={handleRigthScroll}>
            <BiRightArrow />
          </ContainerImagesScrollRight>
        </ContainerImagesMove>
      }
      
    </Container>
  );
}