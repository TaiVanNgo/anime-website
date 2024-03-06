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
        color: #6c7983;
        font-size: 1.2rem;
        &::-webkit-scrollbar{
            width: 7px;
        }
        &::-webkit-scrollbar-thumb{
            background-color: grey;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-track{
            background-color: #ededed;
        }
    }
`;

export default GlobalStyle;