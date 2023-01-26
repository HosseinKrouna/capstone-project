import Link from "next/link";
import events from "@/db.json";
import styled from "styled-components";

function EventsPage() {
  return (
    <>
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <StyledCardDiv>
              <Link href={`/events/${event.id}`}>{event.title}</Link>
            </StyledCardDiv>
          </li>
        ))}
      </ul>
    </>
  );
}

const StyledCardDiv = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  flex-direction: column;
  border: 3px solid;
  background-color: limegreen;
  border-radius: 5px;
`;

export default EventsPage;
