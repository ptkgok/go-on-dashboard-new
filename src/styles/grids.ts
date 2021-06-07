import styled from 'styled-components';

interface Props {
  width?: number | string
  height?: number | string
  wrap?: string
  padding?: number | string
  justify?: string
  align?: string
}

export const Row = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-wrap: ${ prop => prop.wrap || 'wrap' };
  justify-content: ${ prop => prop.justify || 'center' };
  align-items: ${ prop => prop.align || 'center' };
`

export const Column = styled.div<Props>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${ prop => prop.justify || 'center' };
  align-items: ${ prop => prop.align || 'center' };
`

export const GridRow = styled.div<Props>`
  width: 100%;
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @media (max-width:770px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2vw;
  }

  @media (max-width: 428px) {
    grid-template-columns: 1fr;
  }

`

export const GridColumn = styled.div<Props>``