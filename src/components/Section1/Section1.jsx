import React from 'react'
import S from './Section1.module.css'

const Section1 = ({textoSection}) => {
  return (
    <div className={S.produtos}>
    <h3 className={S.tituloProdutos}>{textoSection}</h3>
  </div>
  )
}

export default Section1