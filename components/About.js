import styled from 'styled-components'
import { media } from '../utils/styleUtils'
import Link from 'next/link'
import Wrapper from '../components/Wrapper'

const Name = styled.h2`
  font-weight: 100;
  padding-left: 15px;
  ${media.phone`
      font-size: 24px;
      margin-top: 10px;
      padding-left: 5px;
    `}
`

const P = styled.p`
  font-weight: 100;
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
  font-weight: 100;
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
    <P>I'm an architect and self-taught developer. I think of myself as a designer developer hybrid.</P>
    <P>For the past year I've been teaching myself how to code. I believe this has greatly sharpen my problem solving skills and my ability to learn while creating.</P>
    <P>I enjoy exploring solutions and believe design and development go together. The details make the design.</P>
    <P>Some of the <strong>skills</strong> I've developed are:</P>
    <List>· Html · CSS · Responsive Web Design </List>
    <List>· JavaScript · ES6 · ReactJS</List>
    <List>· Git · GitHub · RESTful API</List>
  </Wrapper>
)
