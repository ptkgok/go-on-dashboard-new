import React from 'react'
import { IPropsButton } from './IProps'
import { Button } from './style'

function ButtonComponent({
  children,
  text,
  width,
  height,
  backgroundColor,
  backgroundColorHover,
  color,
  ...rest
}: IPropsButton) {
  return (
    <Button
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      backgroundColorHover={backgroundColorHover}
      color={color}
      {...rest}
    >
      <span>{text}</span>
      {children}
    </Button>
  )
}

export default ButtonComponent
