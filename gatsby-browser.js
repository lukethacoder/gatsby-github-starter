import React from 'react'
import LayoutMain from './src/components/LayoutMain'
import Footer from './src/components/Footer'

export const wrapPageElement = ({ element, props }) => (
  <LayoutMain {...props}>
    {element}
    {/* elements that only need to render once can be placed here */}
    <Footer />
  </LayoutMain>
)
