import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
   body {
      margin: 0px;
      margin-top:200px;
      font-family: Inter;
      font-size: 12px;
      font-weight: 500;
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.font};
   }
   input {
      color: ${({ theme }) => theme.colors.font};
   }
`;

export default GlobalStyles;
