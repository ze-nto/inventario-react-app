import React from 'react'
import Styles from './Search.module.css'

const Search = () => {
  return (
    <div className={Styles.searchContainer}>
      <form className={Styles.searchWrap}>
        <div className={Styles.formGroup}>
          <label htmlFor='tombo'>Tombo</label>
          <input type='text' name='siape' />
        </div>
        <div className={Styles.formGroup}>
          <label htmlFor='siape'>Siape</label>
          <input type='text' name='siape' />
        </div>
        <div className={Styles.formGroup}>
          <label htmlFor='gid'>GID</label>
          <input type='text' name='gid' />
        </div>
        <div className={Styles.formGroup}>
          <label htmlFor='nome'>Nome</label>
          <input type='text' name='nome' />
        </div>
        <button>Pesquisar</button>
      </form>
    </div>
  )
}

export default Search
