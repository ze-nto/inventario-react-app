import React from 'react'
import Styles from './DropdownMenu.module.css'

const DropdownMenu = ({ children, handleLeave }) => {
  return (
    <ul className={Styles.dropdownWrap} onMouseLeave={handleLeave}>
      {children}
    </ul>
  )
}

export default DropdownMenu
