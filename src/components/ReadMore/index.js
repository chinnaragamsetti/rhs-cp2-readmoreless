// Write your code here
import {useState} from 'react'

import {
  MainCont,
  MainHead,
  MainPara,
  Image,
  SubPara,
  Button,
} from './styledComponents'

const text =
  'Hooks solve a wide variety of seemingly unconnected problems in React that we have encountered over five years of writing and maintaining tens of thousands of components.For curious readers, we have prepared a detailed RFC.Hooks allow you to reuse stateful logic without changing your component hierarchy.Hooks work side-by-side with existing code so you cab=n adopt them gradually.'
const ReadMore = () => {
  const less = text.slice(0, 170)
  const more = text
  const [status, setFun] = useState(false)

  const onClickRead = () => {
    setFun(prevState => !prevState)
  }

  return (
    <MainCont>
      <MainHead>React Hooks</MainHead>
      <MainPara>Hooks are a new addition to React</MainPara>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <SubPara>{status ? more : less}</SubPara>
      <Button onClick={onClickRead} type="button">
        {status ? 'Read Less' : 'Read More'}
      </Button>
    </MainCont>
  )
}

export default ReadMore
