import React from 'react'
import { Container, IconLittleCard } from './Style'

function LittleCard({
  children,
  title,
  width,
  height,
  margin,
  url
}: any) {
  return (
    <>
    <Container 
    to={ url }
    width={width}
    height={height}
    margin={margin}
    >
      <IconLittleCard>
        {children}
      </IconLittleCard>
      <h4>{title}</h4>
    </Container>
    </>
  )
}

export default LittleCard
