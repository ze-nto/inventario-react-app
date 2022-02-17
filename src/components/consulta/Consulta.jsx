import React from 'react'
import Styles from './Consulta.module.css'

const Consulta = () => {
  return (
    <div className={Styles.consultaWrap}>
      <form>
        <div className={Styles.inputWrap}>
          <div>
            <label htmlFor=''>Siape</label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor=''>Tombo</label>
            <input type='text' />
          </div>
          <div>
            <label htmlFor=''>GID</label>
            <input type='text' />
          </div>
        </div>
        <button>Consultar</button>
      </form>
    </div>
  )
}

export default Consulta
