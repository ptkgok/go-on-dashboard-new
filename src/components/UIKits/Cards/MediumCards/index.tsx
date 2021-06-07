import React from 'react'
import { Column } from '../../../../styles/grids'
import { Container, IconMediumCard } from './Styles'

function MediumCard({
  title,
  description,
  url,
  children
}:any) {
  return (
    <Container href={url}>
      <Column>
        <h3>{title}</h3>
        <span>{description}</span>
      </Column>
      <IconMediumCard>
        {children}
      </IconMediumCard>
    </Container>
  )
}

export default MediumCard
