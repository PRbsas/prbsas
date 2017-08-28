import styled from 'styled-components'
import { media } from '../utils/styleUtils'


const Wrapper = styled.div`
  line-height: 1.5;
  padding: 0 20px;
  margin-left: 150px;
  ${media.desktop`
      margin-left: 100px;
    `}
  ${media.tablet`
      margin-left: 80px;
    `}
  ${media.phone`
      margin: 0 2px;
      margin-left: 5px;
    `}
`

export default ({ children }) => (
  <Wrapper>{ children }</Wrapper>
)
