import styled from "styled-components";
import Link from "next/link";

export const StyledBackLink = styled(Link)`
  position: absolute;
  text-align: center;
  right: 137px;
  bottom: 20px;
  padding: 10px;
  margin: 0;
  text-decoration: none;
  text-align: center;
  width: 80px;
  height: 50px;
  cursor: pointer;
  background: #fff;
  margin: 10px;
  border: none;
  border-radius: 23px;
  box-shadow: -5px -5px 15px #051937, 5px 5px 15px #004d7a,
    inset 5px 5px 10px #008793, inset -5px -5px 10px #051937;
  color: #222;
  font-size: 16px;
  &:hover {
    box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #222,
      inset -5px -5px 10px #444;
    font-size: 15px;
    transition: 500ms;
  }
`;
