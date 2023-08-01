import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Alpino', sans-serif;
    //outline: 1px red solid;
   }

   a {
      color: #1770c9;
   }
`;

export default GlobalStyle;
