import { useRouter } from "next/router";
import events from "@/db.json";
import styled from "styled-components";
import { useState } from "react";
import { StyledWrapper } from "@/components/styles/Wrapper";
import { StyledCardContainer } from "@/components/styles/CardContainer";
import { StyledBackLink } from "@/components/styles/BackLink";

function Votepage({ entryData }) {
  const [emojiCheckmark, setEmojiCheckmark] = useState("");

  const router = useRouter();
  const { id } = router.query;

  const currentEvent = entryData.find(
    (entryToVote) => entryToVote.index === id
  );

  if (!currentEvent) {
    return (
      <>
        <StyledHelperWrapper>
          <h2>hmm... no event yet 🤔?</h2>
          <h3>Try here </h3>
          <StyledBackLink href="/">↩︎</StyledBackLink>
        </StyledHelperWrapper>
      </>
    );
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
      <StyledBackLink href="/">↩︎</StyledBackLink>
    </StyledWrapper>
  );
}

const StyledHelperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

const StyledVoteButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

export default Votepage;
