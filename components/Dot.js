import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'



const Dot = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-width:10px;
  border-style: solid;
  margin-top: 5%;
  transition: all .5s ease;

  &:hover {
    transform: scale(1.5);
  }
`

export default () => (
  <Link prefetch href='/'><Dot></Dot></Link>
)
