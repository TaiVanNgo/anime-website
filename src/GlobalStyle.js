import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Inter', sans-serif;
    }

    body{
        background-color: red;
    }
`;

export default GlobalStyle;