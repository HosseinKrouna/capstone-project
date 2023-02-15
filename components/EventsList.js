import Link from "next/link";
import styled from "styled-components";
import EventCard from "@/components/EventCard";

function EventsList({ entryData }) {
  return (
    <>
      {entryData.length > 0 ? (
        <>
          <StyledList>
            {entryData.map((entry) => (
              <li key={entry.id}>
                <StyledLink href={`/votepage/${entry.id}`}>
                  <EventCard entry={entry} />
                </StyledLink>
              </li>
            ))}
          </StyledList>
        </>
      ) : (
        <p>Nothing to vote 🤨</p>
      )}
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

export default EventsList;
