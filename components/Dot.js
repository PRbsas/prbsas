import styled from 'styled-components'
import { media } from '../utils/styleUtils'
import Link from 'next/link'

const Dot = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${props => props.theme.cr};
  color: ${props => props.theme.bg};
  margin-top: 5%;
  margin-left: 5%;
  transition: all .5s ease;
  margin-bottom: 80px;

  &:hover {
    transform: scale(1.3);
  }
  ${media.phone`
      margin-bottom: 50px;
    `}
`

export default ({ to }) => (
  <Link prefetch href={to || '/'}><Dot /></Link>
)
