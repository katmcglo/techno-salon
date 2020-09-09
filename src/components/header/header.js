import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import classes from "./header.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import BookButton from '../bookbutton/bookbutton'

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
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          className={classes.HomeLink}
        >
          {siteTitle}
        </Link>
      </h3>
      <div style={{display: `flex`, alignItems: `center`}}>
        <BookButton/>
        <FontAwesomeIcon style={{ color: `white` }} icon={faBars}></FontAwesomeIcon>
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
