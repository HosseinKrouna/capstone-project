import Card from "@/components/Card";
import events from "@/db.json";
import styled from "styled-components";
import Link from "next/link";

export default function HomePage() {
  const cards = events;
  return (
    <>
      <h1>Friends Wall</h1>
      <StyledUl>
        <Link href="/events">To all Events</Link>
        {/* {cards?.map((card) => (
          <li key={card.id}>
            <Link href="/events">
              <Card
                title={card.title}
                startTime={card.startTime}
                endTime={card.endTime}
                location={card.location}
                creator={card.creator}
                isParticipate={card.isParticipate}
              />
            </Link>
          </li>
        ))} */}
      </StyledUl>
    </>
  );
}

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 10px;
  padding: 0;
  margin: 10px;
  cursor: pointer;
`;
