import styled from 'styled-components'
import { media } from '../utils/styleUtils'
import Wrapper from '../components/Wrapper'

const Name = styled.h2`
  font-weight: 500;
  padding-left: 15px;
  ${media.phone`
      font-size: 24px;
      margin-top: 10px;
      padding-left: 5px;
    `}
`

const P = styled.p`
  font-weight: 500;
  padding-left: 15px;
  max-width: 60%;
  ${media.phone`
      max-width: 100%;
      font-size: 16px;
      margin-top: 3px;
      margin-bottom: 28px;
      padding-left: 5px;
    `}
`

const List = styled.p`
  font-weight: 500;
  font-size: 16px;
  padding-left: 15px;
  margin-top: 0;
  margin-bottom: 5px;
  ${media.phone`
      padding-left: 5px;
      margin-bottom: 5px;
    `}
`

export default () => (
  <Wrapper>
    <Name>Paula Ramirez Pitzen <strong>·</strong></Name>
    <P>I'm an architect and web developer. I think of myself as a designer developer hybrid.</P>
    <P>For the past year I've been studying web development, while researching and experimenting with different languages, frameworks and tools. This has greatly sharpened my problem solving skills and my ability to learn while creating.</P>
    <P>I enjoy building solutions and believe design and development go together. The details make the design.</P>
    <P>My web development experience includes:</P>
    <List>· Html5 · CSS3 · Responsive Web Design </List>
    <List>· JavaScript · ES6 · React  · styled-components · create-react-app</List>
    <List>· Ruby · OOP</List>
    <List>· Git · GitHub · APIs</List>
    <List>· Next.js · Now</List>
  </Wrapper>
)
