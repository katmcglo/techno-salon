import React from "react"
import classes from "./sidedrawer.module.scss"
import { Link } from "gatsby"
import { myContext } from '../../../provider'

const SideDrawer = () => (
  <myContext.Consumer>
        {context => (
          <React.Fragment>
            <nav className={classes.SideDrawer}>
          <ul>
              <li><Link to="/about" onClick={() => context.ToggleSideDrawer()}>About</Link></li>
              <li><Link to="/booking" onClick={() => context.ToggleSideDrawer()}>Book</Link></li>
              <li><Link to="/gallery" onClick={() => context.ToggleSideDrawer()}>Gallery</Link></li>
            </ul>
          </nav>
          </React.Fragment>
        )}
      </myContext.Consumer>
)

export default SideDrawer