import React from "react"
import { Link } from "gatsby"
import classes from './bookbutton.module.scss'

const BookButton = () => {
  return(
    <div>
      <Link to="/booking/">
        <button className={classes.BookButton}>Book</button>
      </Link>
    </div>
  )
}

export default BookButton