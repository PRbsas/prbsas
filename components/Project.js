import styled from 'styled-components'
import { media } from '../utils/styleUtils'

const Title = styled.h3`
  margin: 0 auto;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.25;
  margin-top: 48px;
  margin-bottom: 16px;
  ${media.phone`
      padding-left: 50px;
    `}
`

const Description = styled.p`
  margin: 0px;
  margin-top: 16px;
  margin-bottom: 16px;
  line-height: 1.625;
`

const A = styled.a`
  font-family: "SF Mono","Roboto Mono",Menlo,monospace;
  text-decoration: none;
  color: inherit;
  margin-right: 20px;

  &:hover {
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
  margin-top: 20px;
  ${media.phone`
      margin-top: 60px;
      max-width: 100%;
    `}
`

export default ({ id, title, description, githubLink, demoLink }) => (
  <Project>
    <Title>{ title } ·</Title>
    <Description>{ description }</Description>
    <A href={githubLink} target='_blank' rel='noopener'>Code</A>
    <A href={demoLink} target='_blank' rel='noopener'>Demo</A>
  </Project>
)
