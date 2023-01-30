import CreateEventForm from "@/components/CreateEventForm";
import { StyledBackLink } from "@/components/styles/BackLink";
import { StyledWrapper } from "@/components/styles/Wrapper";

function createEventPage() {
  return (
    <>
      <StyledWrapper>
        <CreateEventForm />
        <StyledBackLink href="/">↩︎</StyledBackLink>
      </StyledWrapper>
    </>
  );
}

export default createEventPage;
