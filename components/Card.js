import events from "@/db.json";
import styled from "styled-components";

function Card() {
  const cards = events;

  return (
    <>
      <StyledWrapper>
        {cards.map(({ id, start_time, end_time, location }) => (
          <li key={id}>
            {
              <div>
                {start_time}
                {end_time}
                {location}
              </div>
            }
          </li>
        ))}
      </StyledWrapper>
    </>
  );
}

export default Card;

const StyledWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 50px;
`;
