import styled from 'styled-components';

interface Props {
  width?: string
  height?: string
}

export const Select = styled.div<Props>`
  width: ${ props => props.width || "100.4%" };
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0px;
  margin-top: 0.4em;
  margin-bottom: 0.4em;

  select:focus {
    background: #FEFCFE;
    box-shadow: 0px 0px 1px 1px rgba(115, 154, 255, 0.75);
    outline: 0px 0px 4px #739AFF;
  }

`;

export const Field = styled.select<Props>`
  background: none;
  border: solid 1px gray;
  width: ${ props => props.width || "100%" };
  height: ${ props => props.height || "40px" };
  background: #FEFCFE;
  box-shadow: 0px 0px 2px rgba(185, 185, 185, 0.25);
  border-radius: 3px;
  border: none;
  padding: 7px;
  font-weight: 600;
  color: #515775;

  option {
    background: #fff;
    font-weight: 600;
    color: #515775;
    :hover {
      background-color: gray;
    }
  }
`

export const Label = styled.label`
  font-size: 0.85em;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  color: #38D430;
  margin-bottom: 5px;
`