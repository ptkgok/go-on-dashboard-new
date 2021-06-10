import Link from 'next/link';
import styled from 'styled-components';
import { ICardProps } from './ICardProps';

export const Container = styled.a<ICardProps>`
  width: ${ prop => prop.width || "100%" };
  height: ${ prop => prop.width || "10%" };
  text-decoration: none;
  padding: 20px;
  margin: ${ prop => prop.margin || "0px 0px 20px 0px" };
  overflow: hidden;
  display: flex;
  background: ${ prop => prop.theme.colors.foreground };
  border-radius: 15px;
  color: #6F8396;
  font-size: 13px;
  cursor: pointer;
  justify-content: flex-start;
  align-items: flex-start;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 0.5s;
  font-weight: bold;

  :hover {
    transform: scale(1.01);
  }

  h3 {
    color: #38D430;
    font-size: 1.8vw;
  }

  @media (max-width: 770px) {
    h3 { 
      font-size: 2.2vw;
    }
  }

  @media (max-width: 428px) {
    h3 { 
      font-size: 4.2vw;
    }
  }
`;