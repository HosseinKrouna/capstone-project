import styled from "styled-components";

export default function VoteDetails({ currentEvent }) {
  return (
    <StyledVoteCardDetails>
      <StyledListItem>Start: {currentEvent.startTime}</StyledListItem>
      <StyledListItem>End: {currentEvent.endTime}</StyledListItem>
      <StyledListItem>Location: {currentEvent.location}</StyledListItem>
      <StyledListItem>Let a Comment: {currentEvent.description}</StyledListItem>
      <StyledListItem>Creator: {currentEvent.creator}</StyledListItem>
    </StyledVoteCardDetails>
  );
}

const StyledListItem = styled.li`
  font-size: 18px;
  font-weight: bold;
`;

const StyledVoteCardDetails = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none; ;
`;
