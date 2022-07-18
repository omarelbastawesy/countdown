import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
  // Primary
--Grayish-blue: hsl(237, 18%, 59%);
--Soft-red: hsl(345, 95%, 68%);

// Neutral
--White: hsl(0, 0%, 100%);
--Dark-blue: hsl(236, 21%, 26%);
--Very-dark-blue: hsl(235, 16%, 14%);
--black-blue: hsl(234, 17%, 12%);
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Red Hat Text', sans-serif;
    margin:0;
    padding:0;
    font-size: 14px;
    font-weight: 700;
  }
`;
