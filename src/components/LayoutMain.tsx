import * as React from 'react'
import styled from '@emotion/styled'

import { breakpoints } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0;
  min-height: 100vh;
  /* max-width: 0px; */
  @media (min-width: ${breakpoints.xl}px) {
    padding: ${getEmSize(64)}em 0 0;
  }
`

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.SFC<LayoutMainProps> = ({ children, className }) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
)

export default LayoutMain
