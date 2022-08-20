import React from 'react'
import Button from '../Button/Button'
import S from './Cardproduto.module.css'

const Cardproduto = ({img, nome, desc, precoAnt, preco, parc, precoParc}) => {
  return (
    <div className={S.card}>
        <div className={S.imgCard}>
        <img src={img}  alt="produto" />
        </div>
            <p className={S.nomeProd}>{nome}</p>
            <p className={S.descProd}>{desc}</p>
            <p className={S.precoAntigo}>De: R${precoAnt},99</p>
            <p className={S.preco}>Por: R${preco},99</p>
            <p className={S.precoParc}>ou {parc}x de R${precoParc},99</p>
            <Button/>
    </div>
  )
}

export default Cardproduto