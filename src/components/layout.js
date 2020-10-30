import React from "react"
import { myContext } from '../../provider';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header/header"
import "./layout.scss"
import SideDrawer from './sidedrawer/sidedrawer'
import Backdrop from './backdrop/backdrop'



const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <myContext.Consumer>
      {context => (
        <React.Fragment>
          <div>
            <Header
              siteTitle={data.site.siteMetadata.title}
              location={props.location} 
            />
            {context.sideDrawerToggle ? <SideDrawer /> : null}
            {context.sideDrawerToggle ? <Backdrop /> : null}
            <main>
              {props.children}
            </main>
          </div>
        </React.Fragment>
      )}
    </myContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
