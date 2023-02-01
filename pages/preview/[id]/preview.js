import { StyledBackLink } from "@/components/styles/BackLink";
import { StyledCardContainer } from "@/components/styles/CardContainer";
import { StyledWrapper } from "@/components/styles/Wrapper";
import Link from "next/link";
import { useRouter } from "next/router";

function PreviewPage({ entryData }) {
  console.log(entryData);

  const router = useRouter();
  const { id } = router.query;

  const currentEvent = entryData.find((entry) => entry.id === id);
  console.log(currentEvent);
  return (
    <StyledWrapper>
      <h1>{currentEvent?.title}</h1>
      <StyledCardContainer>
        <span>Start Time: {currentEvent?.startTime}</span>
        <span>End Time: {currentEvent?.endTime}</span>
        <span>Location: {currentEvent?.location}</span>
        <span>Let a Comment: {currentEvent?.description}</span>
        <span>Creator: {currentEvent?.creator}</span>
      </StyledCardContainer>
      <Link href="/eventsList/eventsList">Add Event</Link>

      <StyledBackLink href="/">↩︎</StyledBackLink>
    </StyledWrapper>
  );
}

export default PreviewPage;
