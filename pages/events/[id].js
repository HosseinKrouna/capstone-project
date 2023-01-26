import { useRouter } from "next/router";
import events from "@/db.json";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

function EventDetail() {
  // const [isThumpUp, setIsThumpUp] = useState(false);
  // const [maybe, setMaybe] = useState("");
  // const [thumpDown, setThumpDown] = useState("");
  const [emojiCheckmark, setEmojiCheckmark] = useState("");

  const router = useRouter();
  const { id } = router.query;

  const currentEvent = events.find((event) => event.id === id);

  if (!currentEvent) {
    return <h1>hmm... no event yet 🤔?</h1>;
  }

  const { title, startTime, endTime, location, creator } = currentEvent;

  // function onToggleCheckmarks() {
  //   }
  function thumpUpHandler() {
    if (!emojiCheckmark) {
      setEmojiCheckmark("👍");
    } else {
      setEmojiCheckmark("");
    }
  }

  function maybeHandler() {
    if (!emojiCheckmark) {
      setEmojiCheckmark("❓");
    } else {
      setEmojiCheckmark("");
    }
  }

  function thumpDownHandler() {
    if (!emojiCheckmark) {
      setEmojiCheckmark("👎");
    } else {
      setEmojiCheckmark("");
    }
  }
  return (
    <>
      <StyledWrapper>
        <h2>{title}</h2>
        <span>{`${emojiCheckmark}`}</span>
        <StyledCardDiv>
          <span>{startTime}</span>
          <span>{endTime}</span>
          <p>Location: {location}</p>
          <p>Creator: {creator}</p>
        </StyledCardDiv>
        <StyledButtonDiv>
          <StyledButtons
            type="button"
            // thumpUp={isThumpUp}
            onClick={thumpUpHandler}
          >
            👍
          </StyledButtons>
          <StyledButtons type="button" onClick={maybeHandler}>
            ❓
          </StyledButtons>
          <StyledButtons type="button" onClick={thumpDownHandler}>
            👎
          </StyledButtons>
        </StyledButtonDiv>
        <Link href="/events">
          <StyledLink>↩︎</StyledLink>
        </Link>
      </StyledWrapper>
    </>
  );
}

const StyledButtons = styled.button`
  font-size: 35px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 12px auto;
`;

const StyledLink = styled.a`
  display: flex;
  background-color: lightblue;
  border: 1px solid;
  padding: 10px;
  margin: 50px 170px;
  font-size: 25px;
  border-radius: 10px;
`;

const StyledButtonDiv = styled.div`
  display: flex;
  justify-content: space-around;

  gap: 10px;
`;

const StyledCardDiv = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  flex-direction: column;
  border: 3px solid;
  background-color: limegreen;
  border-radius: 5px;
`;

export default EventDetail;
