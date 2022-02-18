
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TOKEN_POST, USER_GET } from '../../../../api/api.js'
import Button from '../../../../components/form/Button/Button.jsx'
import TextInput from '../../../../components/form/TextInput/TextInput.jsx'
import useForm from '../../../../hooks/useForm.js'
import Styles from './LoginForm.module.css'

const LoginForm = () => {
  const username = useForm('email')
  const password = useForm()

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      getUser(token)
    }
  }, [])

  async function getUser (token) {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
    console.log(json)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({ username: username.value, password: password.value })
      const response = await fetch(url, options)
      const json = await response.json()

      window.localStorage.setItem('token', json.token)
      getUser(json.token)
    }
  }

  return (
    <section className={Styles.loginWrap}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className={Styles.loginForm}>
        <TextInput label='Email' type='email' name='username' {...username} />
        <TextInput label='Senha' type='password' name='password' {...password} />
        <div className={Styles.buttonWrap}>
          <Button>Entrar</Button>
        </div>
      </form>
      <Link className={Styles.link} to='/login/recuperar-senha'>Perdeu a senha?</Link>
    </section>
  )
}

export default LoginForm
