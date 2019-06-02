import * as React from 'react'
import styled from '@emotion/styled'

import { widths, breakpoints, colors } from '../styles/variables'
import { getEmSize, trans } from '../styles/mixins'

interface RepoItemProps {
  node: {
    id: String
    name: String
    description: String
    forkCount?: String
    createdAt?: String
    pushedAt?: String
    updatedAt?: String
    isFork?: String
    url: String
    owner?: {
      url?: String
      login?: String
    }
    primaryLanguage: {
      id: String
      name: String
      color: String
    }
  }
}

const RepoCard: React.SFC<RepoItemProps> = (repo_data: RepoItemProps) => {
  const current_data = repo_data.data
  console.log(current_data.primaryLanguage)
  return (
    <SingleItem>
      <div>
        <a href={current_data.url} target="_blank">
          <h3>{current_data.name}</h3>
        </a>
        <p>{current_data.description}</p>
      </div>
      {current_data.primaryLanguage ? (
        <LangWrapper>
          <svg height="24" width="24">
            <circle
              cx="12"
              cy="12"
              r="6"
              stroke={current_data.primaryLanguage.color}
              stroke-width="0"
              fill={current_data.primaryLanguage.color}
            />
          </svg>
          <p>{current_data.primaryLanguage.name}</p>
        </LangWrapper>
      ) : null}
    </SingleItem>
  )
}

export default RepoCard

const SingleItem = styled.div`
  border: 1px solid ${colors.grey.base};
  background-color: ${colors.grey.darker};
  padding: 16px;
  text-align: left;
  position: relative;
  min-height: 142px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 3px;
  transition: ${trans};
  box-shadow: 0px 4px 8px 1px rgba(255, 190, 1, 0);
  &:hover {
    box-shadow: 0px 4px 8px 1px rgba(105, 105, 105, 0.2);
    transition: ${trans};
  }
  h3 {
    margin: 0 0 8px;
    font-size: ${getEmSize(16)}rem;
  }
  p {
    margin: 0;
    font-size: ${getEmSize(12)}rem;
  }
`
const LangWrapper = styled.div`
  display: flex;
  flex-direction: row;
  bottom: 0;
  position: relative;
  align-items: center;
  justify-self: flex-end;
  p {
    margin: 0;
    font-size: ${getEmSize(12)}rem;
  }
`
