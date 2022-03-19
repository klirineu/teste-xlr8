import styled from 'styled-components'

export const Container = styled.div`
  width: 300px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`

export const CardImage = styled.img.attrs({
  marginHorizontal: 20,
})`
  
  width: 300px;
  height: 272px;
  background-size: cover;
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;

  input {
    width: 20px;
    height: 20px;
    margin-top: 2px;
    margin-left: 15px;
  }
`

export const CardText = styled.strong`
  margin-left: 40px;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis; 
  display: -webkit-box;
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical; 
`