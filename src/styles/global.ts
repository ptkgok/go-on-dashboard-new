import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Poppins, sans-serif;
  }

  /* #balloon {
    display: none;
  }

  #profileimg:hover + #balloon {
    border: solid green 5px;
    display: flex;
    top: 500px;
  } */


`
