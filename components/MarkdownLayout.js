import styled from 'styled-components'
import { media } from '../utils/styleUtils'

const MarkdownLayout = styled.div`
  line-height: 1.5;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 0 120px 120px;
  text-align: justify;
  ${media.desktop`
      max-width: 700px;
      padding: 0 20px 100px 100px;
    `}
  ${media.tablet`
      max-width: 560px;
      padding: 0 20px 80px 80px;
    `}
  ${media.phone`
      max-width: 370px;
      padding: 0 5px 80px 5px;
    `}
  ${media.phone`
      max-width: 320px;
    `}
`

export default ({ children }) => (
  <MarkdownLayout>{ children }</MarkdownLayout>
)
