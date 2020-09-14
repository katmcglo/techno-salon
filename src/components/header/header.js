import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import classes from "./header.module.scss"
import BookButton from '../bookbutton/bookbutton'
import NavigationDropdownButton from '../navigationdropdownbutton/navigationdropdownbutton'

const Header = ({ siteTitle }) => {
  if (window.location.pathname === "/") {
    return null;
  } else {
  return(
  <header
    style={{
      background: `none`
    }}
  >
    <div
      className={classes.Header}
      
    >
      <h3 style={{ margin: `0`, display: `flex`, alignItems: `center`, marginLeft: `0.8rem` }}>
        <Link
          to="/"
          className={classes.HomeLink}
        >
          {siteTitle}
        </Link>
      </h3>
      <div style={{display: `flex`, alignItems: `center`, height: `100%`, padding: `0 1rem`}}>
        <BookButton/>
        <NavigationDropdownButton/>
      </div>
    </div>
  </header>
  )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
