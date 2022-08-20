import React, { useEffect, useState } from 'react'
import Buttonmais from '../Buttonmais/Buttonmais'
import Cardproduto from '../Cardproduto/Cardproduto'
import S from './Produtos.module.css'

const Produtos = () => {
  const [infos, setInfo] = useState([])
  const [pagina, setPagina] = useState(1)

  const handleReq = async () => {
    const resp = await fetch(
      `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${pagina}`
    );
    const json = await resp.json();
    setInfo([...infos,...json.products])
  }

  const nextPage = () => {
    setPagina(pagina+1)
  }

  useEffect(()=>{
    handleReq();
  }, [pagina])

  return (
    <div>
      <div className={S.divProdutos}>
        {infos.length>0 && infos.map((item, index) => {
          return (
            <Cardproduto
            img={item.image}
            nome={item.name}
            desc={item.description}
            precoAnt={item.oldPrice}
            preco={item.price}
            parc={item.installments.count}
            precoParc={item.installments.value}/>
          )
        })}
      </div>
      <Buttonmais onClick={nextPage}/>
    </div>
  )
}

export default Produtos