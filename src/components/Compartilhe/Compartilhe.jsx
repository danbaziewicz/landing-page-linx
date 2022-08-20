import React from 'react'
import Buttonmais from '../Buttonmais/Buttonmais'
import Input from '../Input/Input'
import Label from '../Label/Label'
import S from './Compartilhe.module.css'

const Compartilhe = () => {
  return (
    <div className={S.divCompart}>
        <p className={S.textCompart}>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
        <div className={S.divInputs}>
            <div className={S.divColumn}>
                <Label textoLabel="Nome do seu amigo:"/>
                <Input tipo="text"/>
            </div>
            <div className={S.divColumn}>
                <Label textoLabel="E-mail:"/>
                <Input tipo="email"/>
            </div>
        </div>
        <Buttonmais textoBtn="Enviar Agora"/>
    </div>
  )
}

export default Compartilhe