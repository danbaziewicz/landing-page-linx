import React from 'react'
import S from './Label.module.css'

const Label = ({textoLabel}) => {
    return (
      <label className={S.label}>{textoLabel}</label>
    )
  }

export default Label