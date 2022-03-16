import React from 'react'
import MenuItem from '../MenuItem/MenuItem.jsx'
import Styles from './DropdownItem.module.css'

const DropdownItem = ({ dest, label, closeDropDown }) => {
  return (
    <ul className={Styles.dropdownItemWrap} onClick={closeDropDown}>
      <MenuItem dest={dest} label={label} />
    </ul>
  )
}

export default DropdownItem
