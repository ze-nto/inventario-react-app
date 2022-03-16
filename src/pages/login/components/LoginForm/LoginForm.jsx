
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../../components/form/Button/Button.jsx'
import TextInput from '../../../../components/form/TextInput/TextInput.jsx'
import { UserContext } from '../../../../contexts/UserContext.js'
import useForm from '../../../../hooks/useForm.js'
import Styles from './LoginForm.module.css'

const LoginForm = () => {
  const username = useForm('email')
  const password = useForm()

  const { userLogin, error, loading } = useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section className={Styles.loginWrap}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className={Styles.loginForm}>
        <TextInput label='Email' type='email' name='username' {...username} />
        <TextInput label='Senha' type='password' name='password' {...password} />
        <div className={Styles.buttonWrap}>
          {loading
            ? <Button disabled>Carregando...</Button>
            : <Button>Entrar</Button>}
        </div>
        {error && <p className={Styles.error}>{error}</p>}
      </form>
      <Link className={Styles.link} to='/login/recuperar-senha'>Perdeu a senha?</Link>
    </section>
  )
}

export default LoginForm
