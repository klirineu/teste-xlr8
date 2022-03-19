import {Container, CardImage, CardInfo, CardText} from './styles'

interface CardProps {
  url: string
  text: string
  checked: boolean
}

export function Card({ url, text, checked }: CardProps) {
  return (
    <Container>
      <CardImage src={url} alt={text}/>
      <CardInfo>
        <input type="checkbox" checked={checked}/>
        <CardText>
          {text}
        </CardText>
      </CardInfo>
    </Container>
  )
}