import { StyledCardContainer } from "./styles/CardContainer";

export default function EventCard({ entry }) {
  return (
    <StyledCardContainer>
      <h2>{entry.title}</h2>
      <span>{entry.voteResult}</span>
    </StyledCardContainer>
  );
}
