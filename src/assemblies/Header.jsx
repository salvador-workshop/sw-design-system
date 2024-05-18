import React from 'react'
import { Navigation } from './Navigation'

export const Header = ({ navLinks }) => {
  return (
    <div>
      <span>Header</span>
      <Navigation navLinks={navLinks} />
    </div>
  )
}
