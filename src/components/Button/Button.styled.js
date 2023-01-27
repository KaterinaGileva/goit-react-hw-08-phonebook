import styled from 'styled-components';

export const ButtonFilter = styled.button`
display: inline-flex;
justify-content: center;
width: 150px;
    padding: 8px 8px;
    border-radius: 8px;
    border: solid 1px green;
    font: inherit;
    cursor: pointer;
    background-color: #00FFFF;

    :hover {
    background-color: #1565c0;
    color: #fff;
    transform: scale(1.02);
  }
  
  :active {
    border: solid 2px white;
    background-color: #1565c0;
    color: #fff;
    box-shadow: 2px 2px 5px #fc894d;
  }

`;