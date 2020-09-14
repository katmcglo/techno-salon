/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
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
  `)

  return (
    <div style={{height: `100%`}}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <SideDrawer></SideDrawer>
      <Backdrop></Backdrop>
      <main style={{ marginTop: '56px' }}>
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
