import EventsList from "../components/EventsList";
import {
  StyledHeaderHomepage,
  StyledAppTitle,
} from "../components/styles/Homepage";
import { StyledAddEventLink } from "../components/styles/AddEventLink";
import { Icon } from "react-icons-kit";
import { ic_add_circle_outline_outline } from "react-icons-kit/md/ic_add_circle_outline_outline";
import styled from "styled-components";

export default function HomePage({ entryData, voteResultData }) {
  return (
    <>
      <StyledHeaderHomepage>
        <StyledAppTitle>Friends Wall</StyledAppTitle>
      </StyledHeaderHomepage>
      <StyledEventTitle>Events</StyledEventTitle>
      <StyledMain>
        <EventsList entryData={entryData} voteResultData={voteResultData} />
        <StyledAddEventLink href="/createEventPage">
          <Icon icon={ic_add_circle_outline_outline} size={80} />
        </StyledAddEventLink>
      </StyledMain>
    </>
  );
}
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StyledEventTitle = styled.h2`
  padding-left: 23px;
`;
