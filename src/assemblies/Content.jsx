import React from 'react'
import { Box } from '../components'

export const Content = ({ children }) => {
  return (
    <Box p={4} color="primary" bg="background">
      { children }
    </Box>
  )
}
