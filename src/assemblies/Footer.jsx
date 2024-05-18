import React from 'react'
import { Navigation } from './Navigation'

export const Footer = ({ navLinks }) => {
  return (
    <div>
      <Navigation navLinks={navLinks} />
      <span>Footer</span>
    </div>
  )
}
