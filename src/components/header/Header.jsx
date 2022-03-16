import React, { useContext } from 'react'
import Styles from './Header.module.css'
import UserIcon from '../../assets/icons/user.png'
import LogoutIcon from '../../assets/icons/log-out.png'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext.js'
import Menu from './components/Menu/Menu.jsx'

const Header = () => {
  const { data, userLogout } = useContext(UserContext)
  return (
    <header className={Styles.headerWrap}>
      <Link to='/'><div className={Styles.logo}>Controle de Patrimônio</div></Link>
      {data && (
        <div className={Styles.linksWrap}>
          <Menu />
          <ul className={Styles.loginControls}>
            <li>
              <img className={Styles.userIcon} src={UserIcon} alt='Icone de usuário' />
              <span>{data.username}</span>
            </li>
            <li>
              <img className={Styles.logoutIcon} src={LogoutIcon} alt='Icone de usuário' />
              <span className={Styles.logout} onClick={userLogout}>Sair</span>
            </li>
          </ul>
        </div>)}
    </header>
  )
}

export default Header
