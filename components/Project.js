import styled from 'styled-components'
import { media } from '../utils/styleUtils'

const Title = styled.h3`
  margin: 0 auto;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.25;
  margin-top: 48px;
  margin-bottom: 16px;
  ${media.tablet`
      font-size: 32px;
    `}
  ${media.phone`
  font-size: 24px;
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
`

const Project = styled.div`
  max-width: 60%;
  margin-top: 20px;
  ${media.desktop`
      max-width: 70%;
    `}
  ${media.tablet`
      max-width: 80%;
      margin-left: -40px;
    `}
  ${media.phone`
      max-width: 100%;
      margin-left: -5px;
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
