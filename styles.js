import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Sansita Swashed", cursive;
  background: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
  }
  `;
