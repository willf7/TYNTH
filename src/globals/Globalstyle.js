import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Roboto';
        padding: 0;
        list-style: none;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        color: #fff;
        background-color: #050000;
    }
`;

export default GlobalStyle;
