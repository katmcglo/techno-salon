import React from 'react';
import classes from './backdrop.module.scss';
import { myContext } from '../../../provider';

const Backdrop = props => (
  <myContext.Consumer>
    {context => (
      <React.Fragment>
        <div
          className={classes.Backdrop}
          onClick={() => context.toggleSideDrawer()}
        ></div>
      </React.Fragment>
      )}
  </myContext.Consumer>
)

export default Backdrop;