import React from 'react'
import Styles from './UserList.module.css'

const UserList = ({ children }) => {
  return (
    <div className={Styles.userListWrap}>
      {children}
    </div>
  )
}

export default UserList
