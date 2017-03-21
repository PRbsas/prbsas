import React from 'react'
import styled, { ThemeProvider, withTheme } from 'styled-components'
import Link from 'next/link'
import Dot from '../components/Dot'
import ListItem from '../components/ListItem'
import Global from './index'

const Wrapper = styled.div`
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  transition: all .5s ease;
  line-height: 1.5;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`

export default () => (
  <Wrapper>
    <Dot></Dot>
    <ListItem></ListItem>
  </Wrapper>
)
