import React from 'react'
import Description from '../Description/Description'
import Form from '../Form/Form'
import S from "./Section.module.css"

const Section = () => {
  return (
    <section className={S.section}>
      <Description/>
      <Form/>
    </section>
  )
}

export default Section