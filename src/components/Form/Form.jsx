import React from 'react'
import Input from '../Input/Input'
import Label from '../Label/Label'
import Radio from '../Radio/Radio'
import S from './Form.module.css'

const Form = () => {
  return (
    <form className={S.form}>
        <Label textoLabel="Nome:"/>
        <Input tipo="text"/>
        <Label textoLabel="Email:"/>
        <Input tipo="email"/>
        <Label textoLabel="CPF:"/>
        <Input tipo="text"/>
        <div>
          <Radio/><Label textoLabel="Masculino"/>
          <Radio/><Label textoLabel="Feminino"/>
        </div>
        <button className={S.btnForm}>Enviar</button>
    </form>
  )
}

export default Form