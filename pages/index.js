import EventsList from "../components/EventsList";
import {
  StyledHeaderHomepage,
  StyledAppTitle,
} from "../components/styles/Homepage";
import { StyledAddEventLink } from "../components/styles/AddEventLink";
import { Icon } from "react-icons-kit";
import { ic_add_circle_outline_outline } from "react-icons-kit/md/ic_add_circle_outline_outline";
import styled from "styled-components";
import Head from "next/head";
import { Animated } from "react-animated-css";

export default function HomePage({ entryData, voteResultData }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
      </Head>
      <StyledHeaderHomepage>
        <Animated animationIn="flash" animationOut="fadeOut" isVisible={true}>
          <StyledAppTitle>Friends Wall</StyledAppTitle>
        </Animated>
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
  gap: 11px;
`;

const StyledEventTitle = styled.h2`
  margin: 0;
  padding-left: 60px;
  color: #e0ffff;
  font-size: 32px;
  left: 50px;
`;
