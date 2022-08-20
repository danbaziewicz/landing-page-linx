import React from 'react'
import S from './Buttonmais.module.css'

const Buttonmais = ({onClick}) => {
  return (
    <div className={S.divBtnMais}>
        <button onClick={onClick} className={S.btnMais}>Ainda mais produtos aqui!</button>
    </div>
  )
}

export default Buttonmais