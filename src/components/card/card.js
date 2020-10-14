import React from "react"
import classes from "./card.module.scss";
import Img from 'gatsby-image';

const Card = (props) => {
  return(
  <div className={classes.Wrapper}>
    <div className={classes.Inner}>
      <h3>{props.header}</h3>
      <p>{props.text}</p>
    </div>
    <Img fluid={props.fluid} style={{ width: "10rem", height: "10rem" }}></Img>
  </div>
  )
}

export default Card