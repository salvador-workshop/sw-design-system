import React from 'react'
import { Navigation } from '.'
import { Box } from '../components'

export const Footer = ({ navLinks }) => {
  return (
    <Box p={4} color="background" bg="primary">
      <Navigation navLinks={navLinks} />
      <span>Footer</span>
    </Box>
  )
}
