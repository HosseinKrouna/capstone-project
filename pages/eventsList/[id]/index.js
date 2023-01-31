import Link from "next/link";
import events from "@/db.json";
import styled from "styled-components";
import { StyledWrapper } from "@/components/styles/Wrapper";
import Head from "next/head";
import { uuid } from "uuidv4";

//TODO - fix link to votepage

function EventsList({ entryData }) {
  return (
    <>
      <StyledWrapper>
        <Head>
          <title>Events</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <StyledList>
          {Object.entries(entryData).map(([key, entryToList], index) => (
            <StyledCardListContainer key={index}>
              <li>
                <StyledLink href={`/votepage/${entryToList.index}`}>
                  <span>
                    {key}: Title: {entryToList}
                  </span>
                </StyledLink>
              </li>
            </StyledCardListContainer>
          ))}
        </StyledList>
        <Link href="/createEventPage/index/">Create Event</Link>
      </StyledWrapper>
      <div></div>
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
