import Link from "next/link";
import styled from "styled-components";
import { StyledWrapper } from "@/components/styles/Wrapper";
import Head from "next/head";

function EventsList({ entryData }) {
  console.log("eventslist");
  console.log(entryData);
  return (
    <StyledWrapper>
      <Head>
        <title>Events</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StyledList>
        {entryData.map((entry) => {
          return (
            <li key={entry.id}>
              <StyledCardListContainer>
                <StyledLink href={"/votepage/"}>{entry.title}</StyledLink>
                <h2>{entry.location}</h2>
              </StyledCardListContainer>
            </li>
          );
        })}
      </StyledList>

      <Link href="/createEventPage/createEventPage">Create Event</Link>
    </StyledWrapper>
  );
}

const StyledList = styled.ul`
  padding: 0;
  list-style: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 700;
  cursor: pointer;
`;

const StyledCardListContainer = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  flex-direction: column;
  border: 3px solid;
  background-color: limegreen;
  border-radius: 5px;
`;

export default EventsList;
