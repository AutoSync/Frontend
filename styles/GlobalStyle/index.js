import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *, html, #root{
        margin: 0 ;
        padding: 0;
        outline: 0;
        box-sizing: border-box;  
    }
    body{
        font-family: "Roboto", sans-serif;
        -webkit-font-smoothing: antialiased !important;

    }
`