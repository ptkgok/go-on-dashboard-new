import { useField } from '@unform/core'
import React, { useEffect, useRef } from 'react'
import { Field, Select, Label } from './style'

function SelectComponent({
  text,
  width,
  height,
  name,
  selectDATA = [],
  ...rest
}: any) {

  const selectRef = useRef(null)
  const { fieldName, registerField, defaultValue } = useField(name)

  useEffect(()=>{
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value'
    })
  },[fieldName,registerField])

  return (
    <Select width={width}>
      <Label>{text}</Label>
      <Field
        width={width}
        height={height}
        ref={selectRef}
        defaultValue={defaultValue}
        {...rest}
      >
        <option value="">Selecione uma opção</option>
        {selectDATA.map((data: any) => (
          <option key={data.id} value={data.titulo}>
            {data.titulo}
          </option>
        ))}
      </Field>
    </Select>
  )
}

export default SelectComponent
