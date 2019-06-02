import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { StaticQuery, graphql } from 'gatsby'

import { colors, breakpoints } from '../styles/variables'
import { getEmSize, trans } from '../styles/mixins'

const Header: React.SFC<any> = () => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        githubData {
          data {
            viewer {
              login
              bio
              name
              company
              avatarUrl
              url
              status {
                id
                emoji
                message
              }
            }
          }
        }
      }
    `}
    render={(data: any) => (
      <StyledHeader>
        <HeaderFixed>
          <HeaderUser>
            <HeaderImage href={data.githubData.data.viewer.url} target="_blank">
              <img src={data.githubData.data.viewer.avatarUrl} />
              <div>
                <p>
                  {data.githubData.data.viewer.status.emoji} {data.githubData.data.viewer.status.message}
                </p>
              </div>
            </HeaderImage>
            <HeaderUserContent>
              <h2>{data.githubData.data.viewer.name}</h2>
              <h4>{data.githubData.data.viewer.login}</h4>
              <p>{data.githubData.data.viewer.bio}</p>

              <ContentList>
                <li>
                  <svg className="octicon octicon-organization" viewBox="0 0 16 16" version="1.1" aria-hidden="true">
                    <path d="M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4z" />
                  </svg>
                  <p>Soda Strategic</p>
                </li>
                <li>
                  <svg className="octicon octicon-location" viewBox="0 0 12 16" version="1.1" aria-hidden="true">
                    <path d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z" />
                  </svg>
                  <p>Australia</p>
                </li>

                <li>
                  <svg className="octicon octicon-link" viewBox="0 0 16 16" version="1.1" aria-hidden="true">
                    <path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z" />
                  </svg>
                  <a rel="nofollow me" href="https://lukesecomb.digital/">
                    https://lukesecomb.digital/
                  </a>
                </li>
              </ContentList>
            </HeaderUserContent>
          </HeaderUser>
          <MenuLink href={data.githubData.data.viewer.url} target="_blank">
            github.
          </MenuLink>
        </HeaderFixed>
      </StyledHeader>
    )}
  />
)

export default Header

const StyledHeader = styled.header`
  color: ${transparentize(0.5, colors.white)};
  position: relative;
  z-index: 50;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @media (min-width: ${breakpoints.xl}px) {
    position: fixed;
    height: 0;
  }
`

const HeaderFixed = styled.div`
  position: relative;
  z-index: 101;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* height: 80px; */
  width: 100%;
  margin: 0;
  padding: 24px;
  transition: ${trans};
  pointer-events: none;
  @media (min-width: ${breakpoints.xl}px) {
    height: 540px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`
const ContentList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    padding: 2px 0;
    display: flex;
    align-items: center;
    svg {
      fill: ${colors.grey.base};
      width: 100%;
      max-width: 12px;
    }
    p,
    a {
      margin: 0 auto 0 6px;
      font-size: ${getEmSize(12)}rem;
    }
  }
`
const HeaderImage = styled.a`
  max-height: 96px;
  max-width: 96px;
  height: 100%;
  width: auto;
  text-decoration: none !important;
  pointer-events: all;
  @media (min-width: ${breakpoints.md}px) {
    max-height: 224px;
    max-width: 224px;
  }
  @media (min-width: ${breakpoints.xl}px) {
    margin-bottom: 48px;
  }
  img {
    position: relative;
    z-index: 5;
  }
  div {
    position: relative;
    display: none;
    border: 1px solid ${colors.brand};
    top: -9px;
    margin: 0;
    z-index: 0;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    background-color: ${colors.grey.darkest};
    @media (min-width: ${breakpoints.md}px) {
      display: block;
    }
    &:before {
      position: absolute;
      content: '';
      height: 100%;
      width: 100%;
      background-color: ${colors.brand};
      opacity: 0.25;
    }
    p {
      padding: 8px;
      margin: 0;
      font-size: ${getEmSize(12)}rem;
    }
  }
`

const HeaderUser = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  @media (min-width: ${breakpoints.sm}px) {
    max-width: 328px;
  }
  @media (min-width: ${breakpoints.md}px) {
    flex-direction: row;
    max-width: 100%;
  }
  @media (min-width: ${breakpoints.xl}px) {
    flex-direction: column;
    max-width: 256px;
  }
`
const HeaderUserContent = styled.div`
  color: ${colors.white};
  @media (min-width: ${breakpoints.md}px) {
    padding: 8px 16px;
  }
  @media (min-width: ${breakpoints.xl}px) {
    padding: 0;
  }
  h2 {
    padding-top: 16px;
    margin: 0;
    font-size: ${getEmSize(26)}rem;
  }
  h4 {
    padding-bottom: 16px;
    margin: 0;
    font-size: ${getEmSize(20)}rem;
  }
  p {
    font-size: ${getEmSize(14)}rem;
  }
`
const MenuLink = styled.a`
  color: ${colors.white};
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  align-self: flex-start;
  justify-self: flex-start;

  color: ${colors.white};
  transition: ${trans};
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover,
  &:focus {
    color: ${colors.brand};
  }
`
