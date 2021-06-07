import { useEffect, useRef } from 'react'
import { Field, Input, Label } from './style'

function InputComponent({
  text,
  width,
  widthField,
  height,
  id,
  defaultValue,
  backgroundColor,
  ...rest
}: any) {


  return (
    <Input width={width}>
      <Label htmlFor={id}>{text}</Label>
      <Field
        id={id}
        width={widthField}
        height={height}
        defaultValue={defaultValue}
        backgroundColor={backgroundColor}
        {...rest}
      />
    </Input>
  )
}

export default InputComponent
