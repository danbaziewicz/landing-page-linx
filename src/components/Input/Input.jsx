import React from 'react'
import S from './Input.module.css'

const Input = ({tipo}) => {
  return (
    <input className={S.input} type={tipo}/>
  )
}

export default Input