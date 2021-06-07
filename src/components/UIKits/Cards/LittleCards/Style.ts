import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ICardProps } from '../MediumCards/ICardProps';

export const Container = styled(Link)<ICardProps>`
  width: ${ props => props.width || "300px" };
  height: ${ props => props.height || "70px" };
  margin: ${ props => props.margin || "20px 50px 0px 0px" };
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px;
  font-weight: 400;

  text-decoration: none;
  background-color: #FFF;
  color: #6F8396;

  transition: cubic-bezier(0.075, 0.82, 0.165, 1) all 0.5s;
  :hover {
    transform: scale(1.01);
  }

  @media (max-width: 800px) {
    width: 100%;
    justify-content: flex-start;
  }
`

export const IconLittleCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F6F6FB;
  color: #6F8396;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  margin-right: 5px;
`