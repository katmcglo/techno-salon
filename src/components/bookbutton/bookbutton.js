import React from "react"
import { Link } from "gatsby"
import classes from './bookbutton.module.css'

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