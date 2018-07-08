import styled from 'styled-components'
import { media } from '../utils/styleUtils'
import Wrapper from './Wrapper'

const MadeBy = styled.p`
  font-size: 16px;
  padding-left: 8px;
  margin-top: 120px;
  margin-bottom: 120px;
  ${media.phone`
      font-size: 12px;
      margin-top: 40px;
    `}
`

export default () => (
  <Wrapper>
    <MadeBy>Made by prbsas · 2017</MadeBy>
  </Wrapper>
)
