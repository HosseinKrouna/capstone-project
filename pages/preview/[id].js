import { StyledBackLink } from "@/components/styles/BackLink";
import { StyledCardContainer } from "@/components/styles/CardContainer";
import { StyledWrapper } from "@/components/styles/Wrapper";
import { useRouter } from "next/router";

function PreviewPage({ entryData }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(entryData);
  const currentEvent = entryData.find((entry) => entry.id === id);
  console.log(currentEvent);

  // if (!currentEvent) {
  //   return router.push("/");
  // }

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

      <StyledBackLink aria-label="Homepage" href="/">
        Back ↩︎
      </StyledBackLink>
    </StyledWrapper>
  );
}

export default PreviewPage;