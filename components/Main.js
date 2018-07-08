import styled from 'styled-components'
import { media } from '../utils/styleUtils'
import Wrapper from './Wrapper'

const Title = styled.h1`
  font-weight: 700;
  font-size: 180px;
  letter-spacing: -6px;
  margin-top: -120px;
  ${media.desktop`
      margin-top: -100px;
    `}
  ${media.tablet`
      font-size: 160px;
      letter-spacing: -5px;
      margin-top: -80px;
    `}
  ${media.phone`
      font-size: 88px;
      letter-spacing: -1px;
      margin-top: -40px;
    `}
    ${media.small`
      font-size: 82px;
      margin-top: -24px;
    `}
`
const Name = styled.h3`
  font-size: 32px;
  font-weight: 700;
  padding-left: 8px;
  margin-top: -120px;
  ${media.tablet`
    font-size: 24px;
    margin-top: -80px;
    `}
  ${media.phone`
      font-size: 20px;
      margin-top: -40px;
    `}
`

const Who = styled.h3`
  font-size: 32px;
  font-weight: 700;
  padding-left: 8px;
  margin-top: -32px;
  ${media.tablet`
    font-size: 24px;
    margin-top: -24px;
    `}
  ${media.phone`
    font-size: 20px;
    margin-top: -20px;
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
