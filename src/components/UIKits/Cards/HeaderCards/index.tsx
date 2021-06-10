import React from 'react'
import { Column } from '../../../../styles/grids'
import { Container } from './Styles'

function HeaderCard({
  title,
  description,
  url,
  day,
  month,
  hour,
  children
}:any) {
  return (
    <Container href={url}>
      <Column style={{ width:"10%" }} >
        <h3>{day}</h3>
        <h4>{month}</h4>
        <h5>{hour}</h5>
      </Column>
        
      <Column align="flex-start">
        <h3>{title}</h3>
        <span>{description}</span>
      </Column>
    </Container>
  )
}

export default HeaderCard