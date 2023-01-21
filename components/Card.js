import events from "@/db.json";
import styled from "styled-components";

function Card() {
  const cards = events;

  return (
    <>
      <StyledWrapper>
        {cards.map(({ id, start_time, end_time, location }) => (
          <StyledList key={id}>
            {
              <StyledDiv>
                {start_time}
                {end_time}
                {location}
              </StyledDiv>
            }
          </StyledList>
        ))}
      </StyledWrapper>
    </>
  );
}

export default Card;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledList = styled.li`
  display: flex;
  border: 1px solid;
  border-radius: 8px;
  /* justify-content: space-between; */
`;
const StyledWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 50px;
  list-style: none;
  padding: 0;
  border: 1px solid;
  border-radius: 8px;
`;
