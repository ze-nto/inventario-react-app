import React from 'react'
import Styles from './Login.module.css'

const Login = () => {
  return (
    <div className={Styles.loginContainer}>

      <div className={Styles.loginWrap}>
        <h2>Login</h2>
        <form className={Styles.loginForm}>
          <div className={Styles.inputGroup}>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' />
          </div>
          <div className={Styles.inputGroup}>
            <label htmlFor='password'>Senha</label>
            <input type='text' name='password' />
          </div>
          <button>Entrar</button>
        </form>
      </div>
    </div>
  )
}

export default Login
