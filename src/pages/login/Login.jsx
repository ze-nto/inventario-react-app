import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Styles from './Login.module.css'
import { LoginForm, PasswordRecovery } from './components'

const Login = () => {
  return (
    <div className={Styles.loginContainer}>
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/recuperar-senha' element={<PasswordRecovery />} />
      </Routes>
    </div>
  )
}

export default Login
