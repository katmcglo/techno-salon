import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { myContext } from '../../../provider';
import classes from '../navigationdropdownbutton/navigationdropdownbutton.module.scss'

const NavigationDropdownButton = () => {
  return (
    <myContext.Consumer>
      {context => (
        <React.Fragment>
          <button
            onClick={() => context.toggleSideDrawer()}
            style={{ background: `none`, border: `none`, cursor: `pointer` }}
            className={classes.Button}>
            <FontAwesomeIcon
              className={classes.Button}
              icon={faBars}></FontAwesomeIcon>
          </button>
        </React.Fragment>
      )}
    </myContext.Consumer>
  );
}

export default NavigationDropdownButton