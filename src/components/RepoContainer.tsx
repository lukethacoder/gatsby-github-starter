import * as React from 'react'
import styled from '@emotion/styled'
import { Link, StaticQuery, graphql } from 'gatsby'

import { widths, breakpoints, colors } from '../styles/variables'
import { getEmSize } from '../styles/mixins'
import RepoCard from './RepoCard'

import { SingleRepo, ReposDataProps } from '../typings'

const StyledRepoContainer = styled.div`
  position: relative;
  margin: 16px auto 36px;
  width: auto;
  max-width: ${getEmSize(widths.lg)}em;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;
  color: ${colors.grey.base};
  grid-gap: 16px;
  align-items: stretch;
  justify-content: center;
  @media (min-width: ${breakpoints.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${breakpoints.lg}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const RepoContainer: React.SFC<any> = (data: any) => {
  console.log(data.data)
  return (
    <StyledRepoContainer>
      {data.data.map((item: any) => (
        <RepoCard key={item.node.name} data={item.node} />
      ))}
    </StyledRepoContainer>
  )
}

export default RepoContainer
