import events from "@/db.json";
import styled from "styled-components";

function Card() {
  const cards = events;

  return (
    <>
      <StyledWrapper>
        {cards.map(({ id, title, start_time, end_time, location }) => (
          <StyledList key={id}>
            {
              <StyledContainer>
                <StyledTitle>
                  <h2>{title}</h2>
                </StyledTitle>
                <div>{start_time}</div>
                <div>{end_time}</div>
                <div>Location: {location}</div>
              </StyledContainer>
            }
          </StyledList>
        ))}
      </StyledWrapper>
    </>
  );
}

export default Card;

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledContainer = styled.div`
  flex-direction: column;
  display: flex;
  gap: 10px;
  padding-bottom: 10px;
`;

const StyledList = styled.li`
  display: flex;
  /* border: 1px solid; */
  border-radius: 8px;
  padding-left: 10px;
  background-color: greenyellow;
  border: 3px solid;

  justify-content: center;
`;
const StyledWrapper = styled.ul`
  /* justify-content: space-between; */
  display: flex;
  flex-direction: column;
  margin: 10px;
  gap: 50px;
  list-style: none;
  padding: 0;
  /* border: 1px solid; */
  border-radius: 8px;
`;
