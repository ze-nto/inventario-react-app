import React from 'react'
import Styles from './Header.module.css'

const Header = () => {
  return (
    <div className={Styles.headerWrap}>
      <div className={Styles.logo}>Controle de Patrimônio</div>
      <ul className={Styles.links}>
        <li>Acervo</li>
        <li>Usuários</li>
        <li>Inventário</li>
      </ul>
    </div>
  )
}

export default Header
