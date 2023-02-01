import { StyledBackLink } from "@/components/styles/BackLink";
import { StyledCardContainer } from "@/components/styles/CardContainer";
import { StyledWrapper } from "@/components/styles/Wrapper";
import Link from "next/link";

function Edit({ entryData }) {
  return (
    <>
      <StyledWrapper>
        <h1>{entryData.title}</h1>
        <StyledCardContainer>
          <span>Start Time: {entryData.startTime}</span>
          <span>End Time: {entryData.endTime}</span>
          <span>Location: {entryData.location}</span>
          <span>Map URL: {entryData.mapURL}</span>
          <span>Let a Comment: {entryData.description}</span>
          <span>Creator: {entryData.creator}</span>
        </StyledCardContainer>
        <Link href="/eventsList/">Add Event</Link>

        <StyledBackLink href="/">↩︎</StyledBackLink>
      </StyledWrapper>
    </>
  );
}

export default Edit;
