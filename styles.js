import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    width: 100vw;
    margin: 0;
    font-family: system-ui;
    background: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
    background-repeat: no-repeat;
  
  }

 main {
  display: flex;
  height: 100px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
 }
`;
