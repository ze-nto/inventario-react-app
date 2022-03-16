import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Styles from './Login.module.css'
import { LoginForm, PasswordRecovery } from './components'
import { UserContext } from '../../contexts/UserContext.js'

const Login = () => {
  const { login } = useContext(UserContext)

  if (login) return <Navigate to='/' />

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
