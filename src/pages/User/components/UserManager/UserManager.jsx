import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../../components/form/Button/Button.jsx'
import UserList from '../UserList/UserList.jsx'
import UserListItem from '../UserListItem/UserListItem.jsx'
import Styles from './UserManager.module.css'

const UserManager = () => {
  return (
    <section className={Styles.userManagerWrap}>
      <h2>Gerenciar Usuários</h2>
      <div className={Styles.buttonWrap}>
        <Link to='/usuarios/cadastrar'><Button>Novo Usuário</Button></Link>
      </div>
      <UserList>
        <UserListItem />
        <UserListItem />
        <UserListItem />
      </UserList>
    </section>
  )
}

export default UserManager
