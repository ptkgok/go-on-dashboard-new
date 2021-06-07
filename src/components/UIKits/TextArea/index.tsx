import { useField } from '@unform/core'
import { useEffect, useRef } from 'react'
import { Field, Label, TextArea } from './style'

function TextAreaComponent({
  text,
  width,
  height,
  name,
  ...rest
}: any) {

  const textAreaRef = useRef(null)
  const { fieldName, registerField, defaultValue } = useField(name)

  useEffect(()=>{
    registerField({
      name: fieldName,
      ref: textAreaRef.current,
      path: 'value'
    })
  },[fieldName,registerField])

  return (
    <TextArea width={width}>
      <Label>{text}</Label>
      <Field
        width={width}
        height={height}
        ref={textAreaRef}
        defaultValue={defaultValue}
        {...rest}
      />
    </TextArea>
  )
}

export default TextAreaComponent
