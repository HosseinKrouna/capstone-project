import {
  StyledCardContainer,
  StyledEventTitle,
  StyledVoteResult,
} from "./styles/CardContainer";
// import { StyledEventTitle} from "./styles"
export default function EventCard({ entry }) {
  return (
    <StyledCardContainer>
      <StyledEventTitle>{entry.title}</StyledEventTitle>
      <StyledVoteResult>{entry.voteResult}</StyledVoteResult>
    </StyledCardContainer>
  );
}
