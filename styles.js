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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background: linear-gradient(45deg, greenyellow, dodgerblue); */
  font-family: "Sansita Swashed", cursive;
  background: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);



    /* height: 100vh;
    width: 100vw;
    margin: 0;
    font-family: system-ui;
    background-repeat: no-repeat; */
    
    
    /* margin: 0;
    padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(45deg, greenyellow, dodgerblue);
  font-family: "Sansita Swashed", cursive;
  background-repeat: no-repeat; */
  }

 main {
  /* display: flex;
  height: 100vh; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* gap: 10px; */
 }
`;
