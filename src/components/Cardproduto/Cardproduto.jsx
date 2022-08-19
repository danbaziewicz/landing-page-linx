import React from 'react'
import Button from '../Button/Button'
import S from './Cardproduto.module.css'

const Cardproduto = () => {
  return (
    <div className={S.card}>
        <div className={S.imgCard}></div>
            <p className={S.nomeProd}>Nome do produto</p>
            <p className={S.descProd}>Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata.</p>
            <p className={S.precoAntigo}>De: R$23,99</p>
            <p className={S.preco}>Por: R$19,99</p>
            <p className={S.precoParc}>ou 2x de R$9,99</p>
            <Button/>
    </div>
  )
}

export default Cardproduto