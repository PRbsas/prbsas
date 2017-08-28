import styled from 'styled-components'
import { media } from '../utils/styleUtils'
import Link from 'next/link'
import Wrapper from '../components/Wrapper'

const A = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: 400;
  padding-top: 20px;
  padding-left: 15px;
  padding-right: 10px;

  &:hover {
    font-weight: 800;
    cursor: pointer;
    color: inherit;
  }
  &:visited {
    text-decoration: none;
    color: inherit;
  }
  ${media.phone`
      display: block;
      text-align: right;
      margin-right: 20px;
      padding-top: 8px;
    `}
  ${media.small`
      margin-right: 5px;
    `}
`

export default () => (
  <Wrapper>
    <A href='https://twitter.com/PRbsas' target='_blank' rel='noopener'>Twitter</A>
    <A href='https://github.com/PRbsas' target='_blank' rel='noopener'>GitHub</A>
    <Link prefetch href='/projects'><A>· Projects</A></Link>
    <A href='https://www.linkedin.com/in/pramirezpitzen' target='_blank' rel='noopener'>LinkedIn</A>
    <A href='mailto:paularamirezpitzen@gmail.com'>Email</A>
    <Link prefetch href='/about'><A>· About</A></Link>
  </Wrapper>
)
