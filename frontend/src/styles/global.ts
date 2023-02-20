import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color1: #1b1b1b;
    --color2: #f5f5f5;
    --color3: #343434;
    --green: #21c45a;
    --red: #f22652;
    --yellow: #fdc500;
  }

  * {
    margin: 0;
    border: none;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: var(--color1);
    min-height: 100vh;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;
