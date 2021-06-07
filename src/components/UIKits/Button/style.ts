import styled from 'styled-components';
import { IPropsButton } from './IProps';

export const Button = styled.button<IPropsButton>`
  width: ${ prop => prop.width || "100%" };
  height: ${ prop => prop.height || "45px" };
  background: ${ prop => prop.backgroundColor || prop.theme.colors.primary };
  color: ${ prop => prop.color || "white" };
  border: none;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) all 0.5s;
  cursor: pointer;
  font-weight: 600;
  margin: ${ prop => prop.margin || "30px 0px 0px 0px" };
  :hover {
    background: ${ prop => prop.backgroundColorHover || "#6DD668" };
  }

  span { 
    margin-right: 15px;
  
  }
`;
