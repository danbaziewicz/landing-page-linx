import React from 'react'
import Cardproduto from '../Cardproduto/Cardproduto'
import S from './Produtos.module.css'

const Produtos = () => {
  return (
    <div>
      <div className={S.produtos}>
        <h3 className={S.tituloProdutos}>Sua seleção espcial</h3>
      </div>
      <div className={S.divProdutos}>
        <Cardproduto/>
        <Cardproduto/>
        <Cardproduto/>
        <Cardproduto/>
        <Cardproduto/>
        <Cardproduto/>
        <Cardproduto/>
        <Cardproduto/>
      </div>
    </div>
  )
}

export default Produtos