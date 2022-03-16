import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './MenuItem.module.css'

const MenuItem = ({ open, children, id, dest, label, handleHover, handleClick }) => {
  return (
    <li
      className={Styles.menuItemWrap}
      open={open}
    >
      <Link
        id={id}
        to={dest}
        onMouseEnter={handleHover}
        onMouseOut={handleHover}
        // onMouseOut={handleHover}
        onClick={handleClick}
      >
        {label}
      </Link>

      {open === id && children}

    </li>
  )
}

export default MenuItem
