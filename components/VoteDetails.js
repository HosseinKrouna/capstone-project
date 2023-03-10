import styled from "styled-components";

export default function VoteDetails({ currentEvent }) {
  return (
    <StyledVoteCardDetails>
      <StyledListItem>{currentEvent?.startTime}</StyledListItem>
      <StyledListItem>{currentEvent?.endTime}</StyledListItem>
      <StyledListItem>{currentEvent?.location}</StyledListItem>
      <StyledListItem>{currentEvent?.description}</StyledListItem>
      <StyledListItem>{currentEvent?.creator}</StyledListItem>
    </StyledVoteCardDetails>
  );
}

const StyledListItem = styled.li`
  font-size: 27px;
  font-weight: 900;
`;

const StyledVoteCardDetails = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: none; ;
`;
