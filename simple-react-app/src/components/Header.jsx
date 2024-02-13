import React from 'react'
import classes from "./Header.module.css"

const Header = (props) => {
  return (
    <div className={classes.list}>{props.header}</div>
  )
}

export default Header