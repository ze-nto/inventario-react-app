import React from 'react'
import Styles from './Header.module.css'
import UserIcon from '../../assets/icons/user.png'
import LogoutIcon from '../../assets/icons/log-out.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className={Styles.headerWrap}>
      <Link to='/'><div className={Styles.logo}>Controle de Patrimônio</div></Link>
      <div className={Styles.linksWrap}>
        <ul className={Styles.links}>
          <li><Link to='/acervo'>Acervo</Link></li>
          <li><Link to='/usuarios'>Usuários</Link></li>
          <li><Link to='/inventario'>Inventário </Link></li>
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
    </header>
  )
}

export default Header
