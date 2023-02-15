import { useRouter } from "next/router";
import styled from "styled-components";
import { useState } from "react";
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
    <>
      <StyledMain>
        <h2>{currentEvent?.title}</h2>
        <StyledVoteEventCard>
          {emojiCheckmark}
          <VoteDetails
            emojiCheckmark={emojiCheckmark}
            currentEvent={currentEvent}
            entryData={entryData}
          />
        </StyledVoteEventCard>
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

        <button type="button" onClick={handleVoteResult}>
          👉Confirm
        </button>

        <StyledBackLink href="/">Back ↩︎</StyledBackLink>
      </StyledMain>
    </>
  );
}

const StyledVoteEventCard = styled.span`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  background: linear-gradient(to left, white, #d9d9d9);
  height: 360px;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const StyledMain = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  gap: 10px;
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
