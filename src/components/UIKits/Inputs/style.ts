import styled from 'styled-components';
import { Props } from './IProps';

export const Input = styled.div<Props>`
  width: ${ props => props.width || "100%" };
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 0.4em;
  margin-bottom: 0.4em;

  input:focus {
    background: ${ props => props.theme.colors.foreground};
    box-shadow: 0px 0px 1px 1px #38D430;
    outline: 0px 0px 4px #38D430;
    label {
      color: #38D430;
    }

  }

`;

export const Field = styled.input<Props>`
  background: none;
  border: solid 1px gray;
  width: ${ props => props.width || "100%" };
  height: ${ props => props.height || "40px" };
  background: ${ props => props.backgroundColor || props.theme.colors.foreground };
  box-shadow: 0px 0px 2px rgba(185, 185, 185, 0.25);
  border-radius: 3px;
  border: none;
  padding: 7px;
  font-weight: 600;
  font-smooth: smooth;
  color: #515775;
  transition: ease-in all 0.2s;
`

export const Label = styled.label`
  font-size: 0.85em;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  color: #38D430;
  margin-bottom: 5px;
`