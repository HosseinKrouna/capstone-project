import Link from "next/link";
import styled from "styled-components";
import Head from "next/head";
import { StyledWrapper } from "@/components/styles/Wrapper";
import EventCard from "@/components/EventCard";

function EventsList({ entryData }) {
  return (
    <>
      <Head>
        <title>Events List</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StyledWrapper>
        <Link href="/createEventPage">
          <p>👉New Event👈</p>
        </Link>
        {entryData.length > 0 ? (
          <>
            <h2>⬇️Vote⬇️</h2>
            <StyledList>
              {entryData.map((entry) => (
                <li key={entry.id}>
                  <StyledLink href={`/votepage/${entry.id}`}>
                    <EventCard entry={entry} />
                  </StyledLink>
                </li>
              ))}
            </StyledList>
          </>
        ) : (
          <p>Nothing to vote 🤨</p>
        )}
      </StyledWrapper>
    </>
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

export default EventsList;
