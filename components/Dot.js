import styled from 'styled-components'
import Link from 'next/link'

const Dot = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${props => props.theme.cr || '#000'};
  color: ${props => props.theme.bg};
  margin-top: 8%;
  margin-left: 5%;
  transition: all .5s ease;
  margin-bottom: 32px;

  &:hover {
    transform: scale(1.3);
  }
`

export default ({ to }) => (
  <Link prefetch href={to || '/'}><Dot /></Link>
)
