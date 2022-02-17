import React from 'react'
import Styles from './Header.module.css'
import UserIcon from '../../assets/icons/user.png'
import LogoutIcon from '../../assets/icons/log-out.png'

const Header = () => {
  return (
    <div className={Styles.headerWrap}>
      <div className={Styles.logo}>Controle de Patrimônio</div>
      <div className={Styles.linksWrap}>
        <ul className={Styles.links}>
          <li>Acervo</li>
          <li>Usuários</li>
          <li>Inventário</li>
        </ul>
        <ul className={Styles.loginControls}>
          <li>
            <img className={Styles.userIcon} src={UserIcon} alt='Icone de usuário' />
            <span>Jose</span>
          </li>
          <li>
            <img className={Styles.logoutIcon} src={LogoutIcon} alt='Icone de usuário' />
            <span>Sair</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
