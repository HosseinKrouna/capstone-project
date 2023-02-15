import styled from "styled-components";

export default function VoteDetails(currentEvent) {
  return (
    <StyledVoteCardDetails>
      <StyledListItem>Start: {currentEvent.startTime}</StyledListItem>
      <li>End: {currentEvent.endTime}</li>
      <li>Location: {currentEvent.location}</li>
      <li>Let a Comment: {currentEvent.description}</li>
      <li>Creator: {currentEvent.creator}</li>
    </StyledVoteCardDetails>
  );
}

const StyledListItem = styled.li`
  font-size: 25px;
`;

const StyledVoteCardDetails = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
`;
