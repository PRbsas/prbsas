import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Dot from '../components/Dot'

const Wrapper = styled.div`
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  transition: all .5s ease;
  line-height: 1.5;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`
const Title = styled.h1`
  font-size: 12rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
`
const Name = styled.h2`
  font-size: 2rem;
  margin: 0 auto;
`
const Who = styled.p`
  font-size: 1.2rem;
  width: 75%;
`

export default ({ children }) => (
  <Wrapper>
    <Dot></Dot>
    <Title>prbsas</Title>
    <Name>Paula Ramirez Pitzen</Name>
    <Who>Architect and self-taught Front-end Developer based in NYC</Who>
    { children }
  </Wrapper>
)
