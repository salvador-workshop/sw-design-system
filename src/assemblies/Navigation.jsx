import React from 'react'

export const Navigation = ({ navLinks }) => {
    const links = navLinks.map(link => {
        return <span key={link}>{link}, </span>
    })
  return (
    <div>
        {links}
    </div>
  )
}
