import styled from "styled-components";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <header>
        <h1>Friends Wall</h1>
      </header>
      <main>
        <StyledUl>
          <Link href="/events">To all Events</Link>
        </StyledUl>
      </main>
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
