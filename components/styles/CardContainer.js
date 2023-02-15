import styled from "styled-components";

export const StyledCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  background: linear-gradient(to left, white, #d9d9d9);
  height: 80px;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
export const StyledEventTitle = styled.h2`
  align-self: center;
`;
export const StyledVoteResult = styled.span`
  align-self: center;
  font-size: 25px;
`;
