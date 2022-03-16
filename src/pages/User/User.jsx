import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserCreateForm } from './components'
import UserManager from './components/UserManager/UserManager.jsx'
import Styles from './User.module.css'

const User = () => {
  return (
    <div className={Styles.userContainer}>
      <Routes>
        <Route path='/' element={<UserManager />} />
        <Route path='/cadastrar' element={<UserCreateForm />} />
      </Routes>
    </div>
  )
}

export default User
