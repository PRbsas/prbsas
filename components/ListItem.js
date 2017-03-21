import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'



const Item = styled.h3`
  font-size: 3rem;
  transition: all .5s ease;
  cursor: pointer;
  margin: 0 auto;
`

export default () => (
  <div>
    <Link href='/layout'><Item>Layout</Item></Link>
    <Link href='/color'><Item>Color</Item></Link>
    <Link href='/sound'><Item>Sound</Item></Link>
    <Link href='/time'><Item>Time</Item></Link>
  </div>
)
