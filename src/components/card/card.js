import React from "react"
import classes from "./card.module.scss";
import Img from 'gatsby-image';

const Card = (props) => {

  console.log(props.fluid)
  return(
  <div className={classes.Wrapper}>
    <div className={classes.Text}>
      <h3>{props.header}</h3>
      <p>{props.text}</p>
    </div>
    <div className={classes.ImageHolder} style={{backgroundImage: `url(${props.fluid.src})`, backgroundSize: "cover"}}></div>
    {/* <Img fluid={props.fluid} className={classes.CardImage}></Img> */}
  </div>
  )
}

export default Card