import React from 'react'
import {
  Header,
  Content,
  Footer,
} from '../assemblies'

export const BasicStackLayout = ({
  headerContent,
  mainContent,
  footerContent,
  navLinks
}) => {
  return (
    <div>
        <Header navLinks={navLinks}>{headerContent}</Header>
        <Content>{mainContent}</Content>
        <Footer navLinks={navLinks}>{footerContent}</Footer>
    </div>
  )
}
