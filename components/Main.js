import styled from 'styled-components'
import { media } from '../utils/styleUtils'
import Wrapper from '../components/Wrapper'

const Title = styled.h1`
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 180px;
  letter-spacing: -6px;
  margin-top: 100px;
  ${media.desktop`
      font-size: 180px;
      letter-spacing: -6px;
      margin-top: 140px;
    `}
  ${media.tablet`
      font-size: 160px;
      letter-spacing: -5px;
      margin-top: 140px;
    `}
  ${media.phone`
      font-size: 88px;
      letter-spacing: -1px;
      margin-top: 60px;
    `}
    ${media.small`
        font-size: 82px;
      `}
`
const Name = styled.h2`
  margin: 0 auto;
  font-weight: 500;
  padding-left: 15px;
  ${media.phone`
      font-size: 24px;
      margin-top: 10px;
      padding-left: 5px;
    `}
`
const Who = styled.p`
  font-weight: 500;
  margin-top: 0;
  padding-left: 15px;
  ${media.phone`
      font-size: 16px;
      margin-top: 3px;
      margin-bottom: 28px;
      padding-left: 5px;
    `}
`

export default ({ children }) => (
  <Wrapper>
    <Title>prbsas.</Title>
    <Name>Paula Ramirez Pitzen</Name>
    <Who>Full Stack Web Developer and Architect based in NYC.</Who>
    { children }
  </Wrapper>
)
