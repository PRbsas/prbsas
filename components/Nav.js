import styled from 'styled-components'
import { media } from '../utils/styleUtils'
import Link from 'next/link'
import Wrapper from '../components/Wrapper'

const UL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const A = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.5;
  padding-left: 8px;

  &:hover {
    cursor: pointer;
    color: inherit;
  }
  &:visited {
    text-decoration: none;
    color: inherit;
  }
  ${media.tablet`
      font-size: 24px;
    `}
  ${media.phone`
      font-size: 20px;
    `}
  ${media.small`
      margin-right: 5px;
    `}
`

export default () => (
  <Wrapper>
    <UL>

      <li><Link prefetch href='/projects'><A>Projects</A></Link></li>
      <li><A href='https://github.com/PRbsas' target='_blank' rel='noopener'>GitHub</A></li>
      <li><Link prefetch href='/thoughts'><A>Thoughts</A></Link></li>
      <li><A href='https://www.linkedin.com/in/pramirezpitzen' target='_blank' rel='noopener'>LinkedIn</A></li>
      <li><A href='https://twitter.com/PRbsas' target='_blank' rel='noopener'>Twitter</A></li>
      <li><A href='mailto:paularamirezpitzen@gmail.com'>Email</A></li>

    </UL>
  </Wrapper>
)
