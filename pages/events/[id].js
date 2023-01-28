import { useRouter } from "next/router";
import events from "@/db.json";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

function Votingpage() {
  const [emojiCheckmark, setEmojiCheckmark] = useState("");

  const router = useRouter();
  const { id } = router.query;

  const currentEvent = events.find((event) => event.id === id);

  if (!currentEvent) {
    return <h1>hmm... no event yet 🤔?</h1>;
  }

  const { title, startTime, endTime, location, creator } = currentEvent;

  function handleVoteEmoji(voteEmoji) {
    if (emojiCheckmark === voteEmoji) {
      setEmojiCheckmark("");
    } else {
      setEmojiCheckmark(voteEmoji);
    }
  }

  return (
    <StyledWrapper>
      <h2>{title}</h2>
      <StyledEmojiCheckmark>{emojiCheckmark}</StyledEmojiCheckmark>
      <StyledCardContainer>
        <span>{startTime}</span>
        <span>{endTime}</span>
        <p>Location: {location}</p>
        <p>Creator: {creator}</p>
      </StyledCardContainer>
      <StyledVoteButtonContainer>
        {["👍", "❓", "👎"].map((voteEmoji) => {
          return (
            <StyledVoteButtons
              onClick={() => handleVoteEmoji(voteEmoji)}
              key={voteEmoji}
            >
              <span aria-label="emoji">{voteEmoji}</span>
            </StyledVoteButtons>
          );
        })}
      </StyledVoteButtonContainer>
      <StyledLink href="/">↩︎</StyledLink>
    </StyledWrapper>
  );
}

const StyledEmojiCheckmark = styled.span`
  position: absolute;
  top: 61px;
  left: 275px;
  right: 80px;
  font-size: 27px;
`;

const StyledVoteButtons = styled.button`
  font-size: 35px;
  cursor: pointer;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 12px auto;
`;

const StyledLink = styled(Link)`
  background-color: lightblue;
  border: 1px solid;
  padding: 10px;
  margin: 50px 170px;
  font-size: 25px;
  border-radius: 10px;
`;

const StyledVoteButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

const StyledCardContainer = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  flex-direction: column;
  border: 3px solid;
  background-color: limegreen;
  border-radius: 5px;
`;

export default Votingpage;
