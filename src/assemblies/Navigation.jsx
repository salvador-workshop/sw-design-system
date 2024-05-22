import React from 'react'
import { Flex, NavLink } from '../components'

export const Navigation = ({ navLinks }) => {
  const links = navLinks.map(link => {
    // return <span key={link}>{link}, </span>
    return (
      <NavLink key={link} href="#!" p={2}>
        {link}
      </NavLink>
    );
  })
  return (
    <Flex className="navigation" as="nav">
      {links}
    </Flex>
  )
}
