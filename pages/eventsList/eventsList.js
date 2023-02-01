import Link from "next/link";
import styled from "styled-components";
import Head from "next/head";
import { StyledWrapper } from "@/components/styles/Wrapper";
import { StyledBackLink } from "@/components/styles/BackLink";
import { useRouter } from "next/router";
import { v4 } from "uuid";

function EventsList({ entryData }) {
  const router = useRouter();
  const { id } = router.query;

  const currentEventToVote = entryData.find(
    (entryToVote) => entryToVote.index === id
  );

  if (!currentEventToVote) {
    return (
      <>
        <StyledHelperWrapper>
          <h2>Not to vote yet 🤔?</h2>
          <h3>Try here </h3>
          <h4>👇</h4>
          <StyledBackLink href="/createEventPage/createEventPage">
            <span>🎨</span>
          </StyledBackLink>
        </StyledHelperWrapper>
      </>
    );
  }

  return (
    <StyledWrapper>
      <Head>
        <title>Events</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <StyledList>
        <StyledLink href="/votepage/votepage">
          {entryData.map((entry) => (
            <li key={v4()}>
              <StyledCardListContainer>
                <h2>{entry.title}</h2>
              </StyledCardListContainer>
            </li>
          ))}
        </StyledLink>
      </StyledList>
      <h2>⬆️To Vote⬆️</h2>
      <p>or</p>

      <Link href="/createEventPage/createEventPage">👉New Event👈</Link>
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

const StyledHelperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default EventsList;
