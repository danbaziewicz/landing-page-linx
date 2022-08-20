import React from 'react'
import S from './Buttonmais.module.css'

const Buttonmais = ({onClick, textoBtn}) => {
  return (
    <div className={S.divBtnMais}>
        <button onClick={onClick} className={S.btnMais}>{textoBtn}</button>
    </div>
  )
}

export default Buttonmais