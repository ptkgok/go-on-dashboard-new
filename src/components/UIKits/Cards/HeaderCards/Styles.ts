import Link from 'next/link';
import styled from 'styled-components';
import { ICardProps } from './ICardProps';

export const Container = styled.a<ICardProps>`
  width: ${ prop => prop.width || "100%" };
  height: ${ prop => prop.height || "10%" };
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
  align-items: center;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 0.5s;
  font-weight: bold;

  hr {
    width: 2px;
    height: 70px;
    background: white;
    margin: 1vw;
  }

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

export const FirstPart = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  h3 { color: #fff; }
  h4 { color: #fff; font-size: 0.8vw; }

  h5 { color: #38D430; font-size: 0.7vw; }

  @media (max-width: 770px) {
    h4 { color: #fff; font-size: 1.8vw; }
    h5 { color: #38D430; font-size: 1.7vw; }
  }

  @media (max-width: 428px) {
    h4 { color: #fff; font-size: 2.8vw; }
    h5 { color: #38D430; font-size: 2.7vw; }
  }

`

export const SecondPart = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  color: white;
  text-align: left;
  align-items: flex-start;
  

  h3 {
    color: #FFF;
    font-size: 1.8vw;
  }

  span {
    color: #FFF;
  }

  @media (max-width: 770px) {
    h3 { 
      font-size: 2.2vw;
    }
    span {
      font-size: 1.6vw;
    }
  }

  @media (max-width: 428px) {
    h3 { 
      font-size: 3.2vw;
    }
    span {
      font-size: 2.6vw;
    }
  }
`