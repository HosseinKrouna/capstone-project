import Link from "next/link";
import events from "@/db.json";
import styled from "styled-components";
import CreateEventForm from "@/components/CreateEventForm";

function EventsPage() {
  return (
    <>
      <StyledWrapper>
        <h2>Events</h2>
        <StyledList>
          {events.map((event) => (
            <StyledCardListContainer key={event.id}>
              <li>
                <StyledLink href={`/events/${event.id}`}>
                  {event.title}
                </StyledLink>
              </li>
            </StyledCardListContainer>
          ))}
        </StyledList>
        <Link href="/createEventPage">Add Event</Link>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 12px auto;
`;

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

export default EventsPage;
