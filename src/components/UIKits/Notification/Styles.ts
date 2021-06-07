import styled from 'styled-components';
import { INotificationStyleProps } from './INotificationProps';


export const Container = styled.div<INotificationStyleProps>`
  width: 250px;
  height: 70px;
  position: absolute;
  background: ${ prop => prop.bgcolor || "#38D430" };
  color: ${ prop => prop.color || "#fff" };
  display: flex;
  justify-content: space-around;
  align-items: center;
  right: 150px;
  top: 10%;
  z-index: 999;
`;