import React from 'react'
import styled from 'styled-components'
import { media } from '../utils/styleUtils'
import Link from 'next/link'
import Wrapper from '../components/Wrapper'
import { categories } from '../data/categories.json'

const Title = styled.h3`
  cursor: pointer;
  margin: 0 auto;
  font-size: 32px;
  font-weight: 400;

  &:hover {
    font-weight: 800;
  }

  ${media.phone`
      padding-left: 50px;
    `}
`

export default () => (
  <Wrapper>
      {
        categories.map(({ id, title }) => (
          <Categories
            id={id}
            key={id}
            title={title}
          />
        ))
      }
  </Wrapper>
)

const Categories = ({ id, title }) => (
  <Link href={`/projects/${id}`}><Title>{ title }</Title></Link>
)
