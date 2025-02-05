import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --font-archivo: 'Archivo', sans-serif;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    font-family: var(--font-archivo);
  }
`;