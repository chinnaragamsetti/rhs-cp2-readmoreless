// Style your elements here
import styled from 'styled-components'

export const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 100px;
  font-family: 'Roboto';
`

export const MainHead = styled.h1`
  color: black;
  font-size: 30px;
`

export const MainPara = styled.p`
  font-size: 10px;
`

export const Image = styled.img`
  width: 100%;
  height: auto;
`

export const Button = styled.button`
  padding: 10px;
  color: #ffffff;
  background-color: blue;
  border: none;
  border-radius: 5px;
`

export const SubPara = styled.p`
  font-size: 10px;
  align-self: flex-start;
`
