import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import classes from '../navigationdropdownbutton/navigationdropdownbutton.module.scss'

const NavigationDropdownButton = ({click}) => {
  return (
  <button
    onClick={click}
    style={{background: `none`, border: `none`, cursor: `pointer`}}
    className={classes.Button}>
    <FontAwesomeIcon
    className={classes.Button} 
    icon={faBars}></FontAwesomeIcon>
  </button>
  );
}

export default NavigationDropdownButton