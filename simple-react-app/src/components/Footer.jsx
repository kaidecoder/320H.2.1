import React from 'react'
import classes from "./Footer.module.css"

const Footer = (props) => {
  return (
    <div className={classes.footer}>{props.footer}</div>
  )
}

export default Footer