import * as React from 'react'
import styled from '@emotion/styled'
import { Link, StaticQuery, graphql } from 'gatsby'

import { widths, breakpoints, colors } from '../styles/variables'
import { getEmSize, trans } from '../styles/mixins'
import RepoCard from './RepoCard'

import { SingleRepo, ReposDataProps } from '../typings'

const StyledStarredReposContainer = styled.div`
  position: relative;
  margin: 16px auto;
  width: auto;
  max-width: ${getEmSize(widths.lg)}em;
  display: flex;
  flex-direction: column;
  color: ${colors.grey.base};
  justify-content: center;
`
const StarredItem = styled.a`
  background-color: ${colors.grey.darkest};
  border: 1px solid ${colors.grey.base};
  margin: 4px 0;
  padding: 12px 24px;
  transition: ${trans};
  text-decoration: none !important;
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  &:hover {
    border: 1px solid ${colors.brand};
    transition: ${trans};
    p {
      color: ${colors.brand};
      transition: ${trans};
    }
  }
  p {
    margin: 0;
    color: ${colors.grey.base};
    transition: ${trans};
    &:nth-child(2) {
      text-align: right;
      padding-left: 4px;
      white-space: nowrap;
    }
  }
`

const StarredReposContainer: React.SFC<any> = (data: any) => {
  console.log(data.data)
  return (
    <StyledStarredReposContainer>
      {data.data.map((item: any) => (
        <StarredItem href={item.node.url} key={item.node.name}>
          <p>
            {item.node.name} - <a href={item.node.owner.url}>{item.node.owner.login}</a>
          </p>
          <p>{item.node.forkCount} forks.</p>
        </StarredItem>
      ))}
    </StyledStarredReposContainer>
  )
}

export default StarredReposContainer
