import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { media } from '../utils/styleUtils'
import Head from 'next/head'

const Body = styled.div`
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  text-rendering: optimizeLegibility;
  transition: all .5s ease;
  background: ${props => props.theme.bg};
  color: ${props => props.theme.cr};
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
`

const themes = [
  { bg: '#ffffff', cr: '#000000' },
  { bg: '#ccffff', cr: '#ff3366' },
  { bg: '#c0b283', cr: '#373737' },
  { bg: '#ffffff', cr: '#85144b' },
  { bg: '#000000', cr: '#ffffff' },
  { bg: '#f2e6d8', cr: '#382ad7' },
  { bg: '#ff2d55', cr: '#ffffff' },
  { bg: '#dfdce3', cr: '#fc4a1a' },
  { bg: '#ffffff', cr: '#0000ff' },
  { bg: '#FF2D55', cr: '#000000' },
  { bg: '#0000ff', cr: '#ffffff' },
  { bg: '#b6f001', cr: '#3b01f0' }

]


class Page extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: 0,
    }
    this.onToggleTheme = this.onToggleTheme.bind(this)
  }



  onToggleTheme() {
    const { color } = this.state
    let i = this.state.color
    if (i < 12 - 1) {
      i++
    } else {
      i = 0
    }
    this.setState({ color: i })
    this.setState(themes[i])
    console.log(color)
  }


  render() {
    const { theme, children } = this.props
    const { color } = this.state
    return (
      <ThemeProvider theme={themes[color]}>
        <Body onClick={() => this.onToggleTheme()}>
          { children }
        </Body>
      </ThemeProvider>
    )
  }
}

export default Page
