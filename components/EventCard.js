import {
  StyledCardContainer,
  StyledEventTitle,
  StyledVoteResult,
} from "./styles/CardContainer";
export default function EventCard({ entry }) {
  return (
    <StyledCardContainer>
      <StyledEventTitle>{entry.title}</StyledEventTitle>
      <StyledVoteResult>{entry.voteResult}</StyledVoteResult>
    </StyledCardContainer>
  );
}
