import React from 'react'
import Styles from './UserListItem.module.css'

const UserListItem = () => {
  return (
    <div className={Styles.userListItemWrap}>
      <div className={Styles.userInfo}>
        <span className={Styles.register}>7353408</span>
        <span className={Styles.name}> José Pereira </span>
      </div>
      <div className={Styles.userControls}>
        <button>Editar</button>
        <button>Excluir</button>
      </div>
    </div>
  )
}

export default UserListItem
