import Card from "@/components/Card";
import events from "@/db.json";
import styled from "styled-components";
import Link from "next/link";

export default function HomePage({ event }) {
  const cards = events;
  return (
    <>
      <h1>Friends Wall</h1>
      <StyledUl>
        {cards?.map((card) => (
          <li key={card.id}>
            <Link href="/detailspage/event">
              <Card
                title={card.title}
                startTime={card.startTime}
                endTime={card.endTime}
                location={card.location}
              />
            </Link>
          </li>
        ))}
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
