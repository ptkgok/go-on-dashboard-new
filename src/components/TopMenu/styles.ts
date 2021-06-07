import styled from 'styled-components';

export const TopMenuContainer = styled.div`
  width: 100%;
  height: 60px;
  z-index: 99;
  padding-left: 270px;
  position: fixed;
  right: 0;
  display: flex;

  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.colors.foreground};
`;

export const ProfilePart = styled.div`
  width: 150px; 
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Notification = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: ${ props => props.theme.colors.background };
  font-weight: bold;
  margin-right: 10px;
  display: flex;
  justify-content:center;
  align-items: center;
  color: gray;
  cursor: pointer;

  :hover {
    filter: brightness(0.9);
  }
`


export const ItensBalloon = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  :hover {
    background: ${ props => props.theme.colors.background };
  }
`

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.25));
  border-radius: 8px;
  border: solid 1px black;
`



export const BalloonContainer = styled.div`
  width: 200px;
  background-color: ${ props => props.theme.colors.foreground };
  position: fixed;
  display: none;
  flex-direction: column;
  padding: 10px;
  top: 70px;
  right: 10px;
  border-radius: 8px;

  :hover ~ ${ProfilePart} {
    display: flex;
  }

`;