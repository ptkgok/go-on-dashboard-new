import styled from 'styled-components';

export const LateralMenuContainer = styled.div`
  /* width: 15.3%; */
  width: 100px;
  max-width: 250px;
  height: 100vh;
  z-index: 100;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: ${props => props.theme.colors.foreground};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
`;

export const ItemMenu = styled.div`
  width: 100%;
  height: 63px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span:first-child {
    margin-left: 0px;
    margin-right: 18px;
  }

  
    color: ${props => props.theme.colors.primary};
    font-size: 17px;
    font-weight: 500;

  svg {
    width: 30px;
  }

  transition: all 0.5s;
  :hover {
    background: #363638;
  }
`