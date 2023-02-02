import Link from "next/link";
import styled from "styled-components";
import Head from "next/head";
import { StyledWrapper } from "@/components/styles/Wrapper";
import { StyledBackLink } from "@/components/styles/BackLink";
import { useRouter } from "next/router";

function EventsList({ entryData, voteResultData }) {
  console.log("EventsList entryData");
  console.log(voteResultData);

  // const { voteResult } = voteResultData;

  // const router = useRouter();

  // if (entryData === false) {
  //   return router.push("/createEventPage/createEventPage");
  // }

  // const router = useRouter();
  // const { id } = router.query;

  // const currentEventToVote = entryData.find(
  //   (entryToVote) => entryToVote.index === id
  // );

  // if (!currentEventToVote) {
  //   return (
  //     <>
  //       <StyledHelperWrapper>
  //         <h2>Not to vote yet 🤔?</h2>
  //         <h3>Try here </h3>
  //         <h4>👇</h4>
  //         <StyledBackLink href="/createEventPage/createEventPage">
  //           <span>🎨</span>
  //         </StyledBackLink>
  //       </StyledHelperWrapper>
  //     </>
  //   );
  // }

  return (
    <StyledWrapper>
      <Head>
        <title>Events</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Link href="/createEventPage/createEventPage">
        <h2>👉New Event👈</h2>
      </Link>
      <span>or</span>
      <h2>⬇️To Vote⬇️</h2>

      <div>
        <StyledList>
          {entryData?.map((entry) => (
            <li key={entry.id}>
              <StyledLink href={`/votepage/${entry.id}`}>
                <StyledCardListContainer>
                  <h2>{entry.title}</h2>
                  <span></span>
                </StyledCardListContainer>
              </StyledLink>
            </li>
          ))}
        </StyledList>
      </div>
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
