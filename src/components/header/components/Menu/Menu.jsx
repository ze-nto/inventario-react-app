import React, { useState } from 'react'
import DropdownItem from '../DropdownItem/DropdownItem.jsx'
import DropdownMenu from '../DropdownMenu/DropdownMenu.jsx'
import MenuItem from '../MenuItem/MenuItem.jsx'
import Styles from './Menu.module.css'

const Menu = () => {
  const [open, setOpen] = useState(null)
  // const [dropDown, setDropDown] = useState(false)
  function handleClick ({ target }) {
    if (open !== null) {
      setOpen(null)
      if (target.id === 'first' || target.id === 'second' || target.id === 'third') {
        setOpen(target.id)
      }
      if (open === target.id) {
        setOpen(null)
      }
    } else {
      setOpen(target.id)
    }
  }

  function closeDropDown () {
    setOpen(null)
    console.log(open)
  }

  function handleLeave () {
    setOpen(null)
    console.log(open)
  }

  // function handleHover ({ target }) {
  //   if (open === null) {
  //     setOpen(target.id)
  //   } else {
  //     setOpen(null)
  //   }
  // }

  return (
    <nav>
      <ul className={Styles.links}>
        <MenuItem
          id='first'
          dest='#'
          label='Acervo'
          open={open}
          handleClick={handleClick}
          // handleHover={handleHover}
        >
          <DropdownMenu handleLeave={handleLeave}>
            <DropdownItem dest='/acervo' label='Consultar Patrimônio' closeDropDown={closeDropDown} />
            <DropdownItem dest='/acervo/cadastrar' label='Cadastrar Patrimônio' closeDropDown={closeDropDown} />
            <DropdownItem dest='/acervo/local' label='Cadastrar Novo Local' closeDropDown={closeDropDown} />
          </DropdownMenu>
        </MenuItem>
        <MenuItem
          id='second'
          dest='#'
          label='Inventário'
          open={open}
          handleClick={handleClick}
          // handleHover={handleHover}
        >
          <DropdownMenu handleLeave={handleLeave}>
            <DropdownItem dest='/inventario/novo' label='Novo' closeDropDown={closeDropDown} />
            <DropdownItem dest='/inventario/registrar-itens' label='Fazer Inventário' closeDropDown={closeDropDown} />
            <DropdownItem dest='/inventario/relatorio' label='Relatório' closeDropDown={closeDropDown} />
            <DropdownItem dest='/inventario/historico' label='Histórico' closeDropDown={closeDropDown} />
          </DropdownMenu>
        </MenuItem>
        <MenuItem
          id='third'
          dest='#'
          label='Usuários'
          open={open}
          handleClick={handleClick}
          // handleHover={handleHover}
        >
          <DropdownMenu handleLeave={handleLeave}>
            <DropdownItem dest='/usuarios' label='Gerenciar' closeDropDown={closeDropDown} />
            <DropdownItem dest='/usuarios/cadastrar' label='Cadastrar' closeDropDown={closeDropDown} />
          </DropdownMenu>
        </MenuItem>
      </ul>
    </nav>
  )
}

export default Menu
