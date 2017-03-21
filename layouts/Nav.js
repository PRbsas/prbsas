import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const A = styled.a`
  text-decoration: none;
  margin-right: 20px;
  color: inherit;

  &:hover {
    border-bottom-style: solid;
    border-bottom-width: 2px;
    cursor: pointer;
    color: inherit;
  }
  &:visited {
    text-decoration: none;
    color: inherit;
  }
`

export default () => (
  <div>
    <A href='https://twitter.com/PRbsas' target='_blank'>Twitter</A>
    <A href='https://github.com/PRbsas' target='_blank'>GitHub</A>
    <Link prefetch href='/projects'><A>Projects</A></Link>
    <A href='https://www.linkedin.com/in/pramirezpitzen' target='_blank'>LinkedIn</A>
    <A href='mailto:paularamirezpitzen@gmail.com'>Email</A>
    <A href='https://standardresume.co/paularamirezpitzen'>Resume</A>
  </div>
)
