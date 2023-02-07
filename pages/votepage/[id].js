import { useRouter } from "next/router";
import styled from "styled-components";
import { useState } from "react";
import { StyledWrapper } from "@/components/styles/Wrapper";
import { StyledCardContainer } from "@/components/styles/CardContainer";
import { StyledBackLink } from "@/components/styles/BackLink";

function Votepage({ entryData, onHandleUpdateVoteEvent }) {
  const [emojiCheckmark, setEmojiCheckmark] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const currentEvent = entryData.find((entryToVote) => entryToVote.id === id);

  // const { title, startTime, endTime, location, creator, description } =
  //   currentEvent;

  function handleVoteResult() {
    const resultVoteEvent = { ...currentEvent, voteResult: emojiCheckmark };

    onHandleUpdateVoteEvent(resultVoteEvent);
  }

  return (
    <StyledWrapper>
      <h2>{currentEvent?.title}</h2>
      <StyledCardContainer>
        <StyledEmojiCheckmark>{emojiCheckmark}</StyledEmojiCheckmark>
        <span>{currentEvent?.startTime}</span>
        <span>{currentEvent?.endTime}</span>
        <p>Location: {currentEvent?.location}</p>
        <p>Let a Comment: {currentEvent?.description}</p>
        <p>Creator: {currentEvent?.creator}</p>
      </StyledCardContainer>
      <StyledVoteButtonContainer>
        {["👍", "❓", "👎"].map((voteEmoji) => {
          return (
            <StyledVoteButtons
              onClick={() => setEmojiCheckmark(voteEmoji)}
              key={voteEmoji}
            >
              <span aria-label="emoji">{voteEmoji}</span>
            </StyledVoteButtons>
          );
        })}
      </StyledVoteButtonContainer>

      <button onClick={() => handleVoteResult()}>👉Confirm</button>

      <StyledBackLink href="/">Back ↩︎</StyledBackLink>
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

const StyledVoteButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

export default Votepage;
