import React from 'react'
import S from './Header.module.css'

const Header = () => {
  return (
    <div>
        <div className={S.header}>
            <h2 className={S.tituloh2}>uma seleção de produtos</h2>
            <h1 className={S.tituloh1}>especial para você</h1>
            <h3 className={S.tituloh3}>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</h3>
            <div className={S.divButtons}>
                <button className={S.btnHeader}>Conheça a Linx</button>
                <button className={S.btnHeader}>Ajude o algoritmo</button>
                <button className={S.btnHeader}>Seus produtos</button>
                <button className={S.btnHeader}>Compartilhe</button>
            </div>

        </div>
    </div>
  )
}

export default Header