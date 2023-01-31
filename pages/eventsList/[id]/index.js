import Link from "next/link";
import styled from "styled-components";
import { StyledWrapper } from "@/components/styles/Wrapper";
import Head from "next/head";
import { uuid } from "uuidv4";

function EventsList({ entryData }) {
  const entryDataToList = [entryData];

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
          {entryDataToList.map(({ title }) => (
            <StyledCardListContainer key={uuid}>
              <li>
                <StyledLink href={"/votepage/"}>{title}</StyledLink>
              </li>
            </StyledCardListContainer>
          ))}
        </StyledList>

        {/* <div>{entries[0]}</div> */}

        <Link href="/createEventPage/index/">Create Event</Link>
        {/* <ul>
          {entryData.map((entryDataToList) => (
            <div key={entryDataToList.id}>
              <li href={`/votepage/${entryDataToList.id}`}>
                {entryData.title}
              </li>
            </div>
          ))}
        </ul> */}
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
