import React from 'react'
import Button from '../../../../components/form/Button/Button.jsx'
import TextInput from '../../../../components/form/TextInput/TextInput.jsx'
import Styles from './UserCreateForm.module.css'

const UserCreateForm = () => {
  return (
    <section className={Styles.createFormWrap}>
      <h2>Cadastrar Novo Usuário</h2>
      <form>
        <TextInput label='Nome' />
        <TextInput label='Email' />
        <TextInput label='Senha' />
        <TextInput label='Categoria' />
        <div className={Styles.buttonWrap}>
          <Button>Cadastrar</Button>
        </div>
      </form>
    </section>
  )
}

export default UserCreateForm
