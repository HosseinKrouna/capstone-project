import styled from "styled-components";

function Card({ title, startTime, endTime, location }) {
  return (
    <StyledContainer>
      <h2>{title}</h2>
      <span>{startTime}</span>
      <span>{endTime}</span>
      <p>Location: {location}</p>
    </StyledContainer>
  );
}

export default Card;

const StyledContainer = styled.article`
  border-radius: 8px;
  flex-direction: column;
  display: flex;
  gap: 10px;
  border: 3px solid;
  background-color: limegreen;
  padding-left: 10px;
  h2 {
    text-align: center;
  }
`;
