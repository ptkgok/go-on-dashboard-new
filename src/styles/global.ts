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
    transition: all 0.7s;

  }

  #profileimg:hover + #balloon {
    display: flex;
  } */

  /* @keyframe OptionAnimation {
    10% { opacity: 0; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  } */
`
