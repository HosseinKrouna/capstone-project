import Link from "next/link";
import styled from "styled-components";
import { StyledWrapper } from "@/components/styles/Wrapper";
import Head from "next/head";

function EventsList({ entryData }) {
  return (
    <StyledWrapper>
      <Head>
        <title>Events</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StyledList>
        {entryData.map((entry) => (
          <li key={entry.id}>
            <StyledCardListContainer>
              <StyledLink href="/votepage/votepage">
                <h2>{entry.title}</h2>
              </StyledLink>
            </StyledCardListContainer>
          </li>
        ))}
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
