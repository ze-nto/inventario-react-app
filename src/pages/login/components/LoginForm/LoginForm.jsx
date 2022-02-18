
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Styles from './LoginForm.module.css'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost/wordpress/controle_patrimonio/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then(response => {
      console.log(response)
      return response.json()
    }).then(json => console.log(json))
  }

  return (
    <section className={Styles.loginWrap}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className={Styles.loginForm}>
        <div className={Styles.inputGroup}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div className={Styles.inputGroup}>
          <label htmlFor='password'>Senha</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button>Entrar</button>
      </form>
      <Link className={Styles.link} to='/login/recuperar-senha'>Perdeu a senha?</Link>
    </section>
  )
}

export default LoginForm
