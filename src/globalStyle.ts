import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", "sans-serif";
        background-color: ${({theme}) => theme.backgroundColor};
        color: ${({theme}) => theme.textColor};
    }

    html {
        font-size: 10px;
    }
`;