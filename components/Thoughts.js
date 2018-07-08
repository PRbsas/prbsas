import React from 'react'
import styled from 'styled-components'
import { media } from '../utils/styleUtils'
import Link from 'next/link'
import Wrapper from '../components/Wrapper'
import { thoughts } from '../data/thoughts.json'

const Title = styled.h3`
  cursor: pointer;
  margin: 0 auto;
  font-size: 48px;
  font-weight: 700;
  line-height: 1.25;
  margin-top: 32px;
  margin-bottom: 16px;
  ${media.phone`
      padding-left: 50px;
    `}
`

const Date = styled.p`
  font-family: "SF Mono","Roboto Mono",Menlo,monospace;
  color: inherit;
  margin-right: 20px;
  ${media.phone`
      margin-top: 10px;
      display: flex;
      float: right;
    `}
`

const Container = styled.div`
  margin-bottom: 64px;
`

const thoughtsByDate = thoughts.reverse()

export default () => (
  <Wrapper>
    {
      thoughtsByDate.map(({ id, title, date }) => (
        <Thoughts
          id={id}
          key={id}
          title={title}
          date={date}
        />
      ))
    }
  </Wrapper>
)

const Thoughts = ({ id, title, date }) => (
  <Container>
    <Link prefetch href={`/thoughts/${id}`}><Title>{ title }</Title></Link>
    <Date>{date}</Date>
  </Container>
)
