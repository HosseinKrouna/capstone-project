import Link from "next/link";
import styled from "styled-components";
import Head from "next/head";
import { StyledWrapper } from "@/components/styles/Wrapper";

function EventsList({ entryData }) {
  return entryData?.length > 0 ? (
    <StyledWrapper>
      <Head>
        <title>Events</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Link href="/createEventPage">
        <h2>👉New Event👈</h2>
      </Link>
      <h3>OR</h3>
      <h2>⬇️Vote⬇️</h2>
      <div>
        <StyledList>
          {entryData?.map((entry) => (
            <li key={entry.id}>
              <StyledLink href={`/votepage/${entry.id}`}>
                <StyledCardListContainer>
                  <h2>{entry.title}</h2>
                  <span>{entry.voteResult}</span>
                </StyledCardListContainer>
              </StyledLink>
            </li>
          ))}
        </StyledList>
      </div>
    </StyledWrapper>
  ) : (
    <Link href="/createEventPage">
      <h2>👉New Event👈</h2>
    </Link>
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
