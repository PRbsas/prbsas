import styled from 'styled-components'
import { media } from '../utils/styleUtils'
import Link from 'next/link'
import Wrapper from '../components/Wrapper'

const Title = styled.h3`
  font-size: 28px;
  font-weight: 400;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 3%;
  ${media.desktop`

    `}
  ${media.tablet`
    margin-bottom: 1%;
    `}
  ${media.phone`
    margin-bottom: 1%;
    `}
`

const Description = styled.p`
  font-size: 16px;
  font-weight: 100;
  line-height: 1.6;
  margin: 0 auto;
`

const A = styled.a`
  text-decoration: none;
  margin-right: 20px;
  color: inherit;
  font-weight: 400;
  margin-top: 50px;

  &:hover {
    font-weight: 800;
    cursor: pointer;
    color: inherit;
  }
  &:visited {
    text-decoration: none;
    color: inherit;
  }
  ${media.phone`
      margin-top: 10px;
      display: flex;
      float: right;
    `}
`

const Project = styled.div`
  max-width: 60%;
  margin-top: 80px;
  ${media.phone`
      margin-top: 60px;
      max-width: 100%;
    `}
`

const Ws = styled.div`
  margin-bottom: 120px;
`

export default ({ id, title, description, githubLink, demoLink }) => (
  <Wrapper>
    <Project>
      <Title>{ title } ·</Title>
      <Description>{ description }</Description>
      <A href={ githubLink } target='_blank' rel='noopener'>· Code</A>
      <A href={ demoLink } target='_blank' rel='noopener'>· Demo</A>
    </Project>
    <Ws />
  </Wrapper>
)
