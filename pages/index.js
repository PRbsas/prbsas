import React, { Component } from 'react'
import styled, { ThemeProvider, withTheme } from 'styled-components'
import Head from 'next/head'
import Main from '../layouts/Main'
import Nav from '../layouts/Nav'


const Global = styled.div`
  background: ${props => props.theme.bg};
  color: ${props => props.theme.cr};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  width: 100%;
`

var themes = [
  { bg: '#ffffff', cr: '#000000' },
  { bg: '#ccffff', cr: '#ff3366' },
  { bg: '#b6f001', cr: '#3b01f0' },
  { bg: '#f2e6d8', cr: '#2ee760' },
  { bg: '#ffffff', cr: '#85144b' },
  { bg: '#fce2ef', cr: '#ee3e0f' },
  { bg: '#f2e6d8', cr: '#382ad7' },
  { bg: '#ffffff', cr: '#fe5b0e' },
  { bg: '#ffffff', cr: '#0000ff' },
  { bg: '#7df2e8', cr: '#861219' },
  { bg: '#ff3333', cr: '#0a0a0a' },
  { bg: '#ffffff', cr: '#ffde37' }
]
var i = 0
function toggleTheme() {
  if ( i < themes.length - 1) {
    i++
  } else {
    i = 0
  }
}
//    <Head><title>prbsas</title></Head>
export default () =>
  <ThemeProvider theme={themes[i]}>
    <Global onClick={() => toggleTheme()}>
      <Main>
        <Nav></Nav>
      </Main>
    </Global>
  </ThemeProvider>
