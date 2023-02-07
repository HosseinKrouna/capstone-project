import { StyledBackLink } from "@/components/styles/BackLink";
import { StyledCardContainer } from "@/components/styles/CardContainer";
import { StyledWrapper } from "@/components/styles/Wrapper";
import { useRouter } from "next/router";

function PreviewPage({ entryData }) {
  const router = useRouter();
  const { id } = router.query;

  const currentEvent = entryData.find((entry) => entry.id === id);
  const { title, startTime, endTime, location, description, creator } =
    currentEvent;
  return (
    <StyledWrapper>
      <h1>{title}</h1>
      <StyledCardContainer>
        <span>Start Time: {startTime}</span>
        <span>End Time: {endTime}</span>
        <span>Location: {location}</span>
        <span>Let a Comment: {description}</span>
        <span>Creator: {creator}</span>
      </StyledCardContainer>

      <StyledBackLink href="/">↩︎</StyledBackLink>
    </StyledWrapper>
  );
}

export default PreviewPage;
