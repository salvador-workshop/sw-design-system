import React from 'react'
import { Navigation } from '.'
import { Box } from '../components'

export const Header = ({ navLinks }) => {
  return (
    <Box p={4} color="background" bg="primary">
      <span>Header</span>
      <Navigation navLinks={navLinks} />
    </Box>
  )
}
