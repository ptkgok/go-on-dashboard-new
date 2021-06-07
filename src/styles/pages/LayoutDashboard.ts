import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;


export const TitlePage = styled.h2`
  color: ${ props => props.theme.colors.primary };
`

export const Content = styled.div`
  width: 100%;
  margin: 0px 20px;
  padding: 20px;
  padding-top: 50px;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  ${TitlePage} {
    margin-top: 60px;
  }

  color: black;
`
