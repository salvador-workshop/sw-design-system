import React from 'react'
import { Flex, Box } from '../components'

export const Navigation = ({ navLinks }) => {
  const links = navLinks.map(link => {
    // return <span key={link}>{link}, </span>
    return (
      <Box key={link} bg="secondary" color="white" sx={{ flex: '1 1 auto' }}>
        {link}
      </Box>
    );
  })
  return (
    <Flex className="navigation">
      {links}
    </Flex>
  )
}
