import Link from "next/link";
import events from "@/db.json";
import styled from "styled-components";
import { StyledWrapper } from "@/components/styles/Wrapper";
import Head from "next/head";
import { uuid } from "uuidv4";

function EventsList() {
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
          {events.map((event) => (
            <StyledCardListContainer key={event.id}>
              <li>
                <StyledLink href={`/votepage/${event.id}`}>
                  {event.title}
                </StyledLink>
              </li>
            </StyledCardListContainer>
          ))}
        </StyledList>
        <Link href="/createEventPage/index/">Add Event</Link>
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
