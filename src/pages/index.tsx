import * as React from 'react'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import RepoContainer from '../components/RepoContainer'
import StarredReposContainer from '../components/StarredReposContainer'

import { widths, breakpoints } from '../styles/variables'
import { getEmSize } from '../styles/mixins'
import { H1 } from '../components/Titles'

const IndexPage: React.SFC<any> = () => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        github {
          user(login: "lukethacoder") {
            pinnedRepositories(first: 6) {
              edges {
                node {
                  id
                  name
                  description
                  url
                  createdAt
                  primaryLanguage {
                    id
                    name
                    color
                  }
                }
              }
            }
            repositories(first: 6, privacy: PUBLIC, orderBy: { field: UPDATED_AT, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  description
                  url
                  createdAt
                  primaryLanguage {
                    id
                    name
                    color
                  }
                }
              }
            }
            repositoriesContributedTo(first: 6) {
              edges {
                node {
                  id
                  name
                  description
                  forkCount
                  createdAt
                  pushedAt
                  updatedAt
                  url
                  owner {
                    url
                    login
                  }
                  primaryLanguage {
                    id
                    name
                    color
                  }
                }
              }
            }
            starredRepositories(first: 100) {
              edges {
                node {
                  id
                  name
                  url
                  createdAt
                  forkCount
                  owner {
                    url
                    login
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data: any) => (
      <IndexLayout>
        <Page>
          <Container>
            <ContainerChild>
              {data.github.user.pinnedRepositories.edges.length > 0 ? (
                <>
                  <H1>Pinned Repos</H1>
                  <RepoContainer data={data.github.user.pinnedRepositories.edges} />
                </>
              ) : null}
              {data.github.user.repositories.edges.length > 0 ? (
                <>
                  <H1>Recently Updated</H1>
                  <RepoContainer data={data.github.user.repositories.edges} />
                </>
              ) : null}
              {data.github.user.repositoriesContributedTo.edges.length > 0 ? (
                <>
                  <H1>Contributions</H1>
                  <RepoContainer data={data.github.user.repositoriesContributedTo.edges} />
                </>
              ) : null}

              {data.github.user.starredRepositories.edges.length > 0 ? (
                <>
                  <H1>Starred Repos ({data.github.user.starredRepositories.edges.length})</H1>
                  <StarredReposContainer data={data.github.user.starredRepositories.edges} />
                </>
              ) : null}
            </ContainerChild>
          </Container>
        </Page>
      </IndexLayout>
    )}
  />
)

export default IndexPage

const ContainerChild = styled.div`
  max-width: 100%;
  width: 100%;
  margin: 0;
  @media (min-width: ${breakpoints.xl}px) {
    max-width: ${getEmSize(widths.lg - 308)}em;
    margin: 0 0 0 auto;
  }
`
