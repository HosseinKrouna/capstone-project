import { useRouter } from "next/router";
import styled from "styled-components";
import { useState } from "react";
import { StyledWrapper } from "@/components/styles/Wrapper";
import { StyledBackLink } from "@/components/styles/BackLink";
import VoteDetails from "@/components/VoteDetails";
function Votepage({ entryData, onHandleUpdateVoteEvent }) {
  const [emojiCheckmark, setEmojiCheckmark] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const currentEvent = entryData.find((entryToVote) => entryToVote.id === id);

  function handleVoteResult() {
    const resultVoteEvent = { ...currentEvent, voteResult: emojiCheckmark };

    onHandleUpdateVoteEvent(resultVoteEvent);
  }

  return (
    <StyledWrapper>
      <h2>{currentEvent?.title}</h2>
      {emojiCheckmark}
      <VoteDetails
        emojiCheckmark={emojiCheckmark}
        currentEvent={currentEvent}
        entryData={entryData}
      ></VoteDetails>
      <StyledVoteButtonContainer>
        {["👍", "❓", "👎"].map((voteEmoji) => {
          return (
            <StyledVoteButtons
              onClick={() => setEmojiCheckmark(voteEmoji)}
              key={voteEmoji}
            >
              <span aria-label="Emoji image on vote button" role="img">
                {voteEmoji}
              </span>
            </StyledVoteButtons>
          );
        })}
      </StyledVoteButtonContainer>

      <button onClick={handleVoteResult}>👉Confirm</button>

      <StyledBackLink href="/">Back ↩︎</StyledBackLink>
    </StyledWrapper>
  );
}

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
