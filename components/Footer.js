import styled from 'styled-components'
import { media } from '../utils/styleUtils'
import Wrapper from '../components/Wrapper'

const MadeBy = styled.p`
  font-size: 14px;
  padding-left: 15px;
  margin-top: 60px;
  ${media.phone`
      font-size: 12px;
      text-align: right;
      margin-right: 30px;
      padding-left: 10px;
      margin-top: 40px;
    `}
  ${media.small`
      margin-right:8px;
    `}
`

export default () => (
  <Wrapper>
    <MadeBy>This site was built with react, next.js and
      styled-components by <strong>prbsas · 2017</strong>
    </MadeBy>
  </Wrapper>
)
