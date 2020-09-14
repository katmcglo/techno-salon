import React from "react"
import classes from "./sidedrawer.module.scss"
import { Link } from "gatsby"

const SideDrawer = props => (
  <nav className={classes.SideDrawer}>
    <ul>
      <li><Link to="/">About</Link></li>
      <li><Link to="/">Book</Link></li>
      <li><Link to="/">Gallery</Link></li>
    </ul>
  </nav>
)

export default SideDrawer