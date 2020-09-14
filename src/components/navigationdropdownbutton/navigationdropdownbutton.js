import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"

const NavigationDropdownButton = () => {
  return (
  <button style={{background: `none`, border: `none`, cursor: `pointer`}}>
    <FontAwesomeIcon style={{ color: `white`, marginLeft: `0.2rem` }} icon={faBars}></FontAwesomeIcon>
  </button>
  );
}

export default NavigationDropdownButton