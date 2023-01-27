import Link from "next/link";
import events from "@/db.json";
import styled from "styled-components";

function EventsPage() {
  return (
    <>
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <StyledCardListContainer key={event.id}>
            <li>
              <Link href={`/events/${event.id}`}>{event.title}</Link>
            </li>
          </StyledCardListContainer>
        ))}
      </ul>
    </>
  );
}

const StyledCardListContainer = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  flex-direction: column;
  border: 3px solid;
  background-color: limegreen;
  border-radius: 5px;
`;

export default EventsPage;
