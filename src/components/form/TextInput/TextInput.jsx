import React from 'react'
import Styles from './TextInput.module.css'

const TextInput = ({ name, label, type, value, onChange, onBlur, error }) => {
  return (
    <div className={Styles.inputGroup}>
      <div className={Styles.inputWrap}>
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      {error && <p className={Styles.error}>{error}</p>}
    </div>
  )
}

export default TextInput
