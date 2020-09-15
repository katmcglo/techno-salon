import React from 'react';
import classes from './backdrop.module.scss';

const Backdrop = props => (
  <div 
  className={classes.Backdrop}
  onClick={props.click}></div>
)

export default Backdrop;