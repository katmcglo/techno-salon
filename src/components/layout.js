/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import Header from "./header/header"
import "./layout.scss"
import SideDrawer from './sidedrawer/sidedrawer'
import Backdrop from './backdrop/backdrop'

const Layout = ({ children }) => {
  
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [ sideDrawerToggle, setSideDrawerToggle ] = useState(false)


  return (
    <div
    style={{height: `100%`}}
    >
      <Header
      siteTitle={data.site.siteMetadata.title}
      click={() => setSideDrawerToggle(!sideDrawerToggle)} 
      />
      {sideDrawerToggle ? <SideDrawer /> : null}
      {sideDrawerToggle ? <Backdrop click={() => setSideDrawerToggle(!sideDrawerToggle)} /> : null}
      <main>
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
