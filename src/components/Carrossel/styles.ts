import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`

export const ContainerImagesScrollLeft = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  width: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  svg {
    width: 25px;
    height: 25px;
    color: white;
    cursor: pointer;
  }
`

export const ContainerImagesScrollRight = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: absolute;
  width: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  right: 0;
  svg {
    width: 25px;
    height: 25px;
    color: white;
    cursor: pointer;
  }
`

export const ContainerImagesMove = styled.div`
  display: flex;
  top: 220px;
  position: relative;
  
`
      
export const ContainerImagesScroll = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x proximity;
  gap: 10px;
  scroll-snap-align: start;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-left: 30px;
  margin-right: 30px;
`

export const DivRown = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  
  button {
    padding: 10px;
  }

  button:first-child {
    margin-right: 10px;
  }
`