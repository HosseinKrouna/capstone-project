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
        <StyledVoteTitle>{currentEvent?.title}</StyledVoteTitle>
        <StyledVoteEventCard>
          <VoteDetails
            emojiCheckmark={emojiCheckmark}
            currentEvent={currentEvent}
            entryData={entryData}
          />

          <StyledEmojiCheckmark>{emojiCheckmark}</StyledEmojiCheckmark>
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

        <StyledButtonConfirm type="button" onClick={handleVoteResult}>
          Confirm
        </StyledButtonConfirm>
      </StyledMain>
      <StyledBackLink href="/">Home</StyledBackLink>
    </>
  );
}

const StyledEmojiCheckmark = styled.span`
  font-size: 30px;
`;

const StyledVoteTitle = styled.h2`
  font-size: 40px;
  margin: 0;
  margin-top: 10px;
`;

const StyledButtonConfirm = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: 16px;
  font-family: inherit;

  border: 1px solid #012880;
  background-image: linear-gradient(-180deg, #ff89d6 0%, #c01f9e 100%);
  box-shadow: 0 1rem 1.25rem 0 rgba(22, 75, 195, 0.5),
    0 -0.25rem 1.5rem rgba(110, 15, 155, 1) inset,
    0 0.75rem 0.5rem rgba(255, 255, 255, 0.4) inset,
    0 0.25rem 0.5rem 0 rgba(180, 70, 207, 1) inset;
  transform-style: preserve-3d;
  transition: all 175ms cubic-bezier(0, 0, 1, 1);
  font-weight: 600;
  padding: 1.25em 2em;
  border-radius: 0.75em;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
    background 150ms cubic-bezier(0, 0, 0.58, 1);
  &::before {
    position: absolute;
    /* width: 100%;
    height: 100%; */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }
  &:hover {
    transform: translate(0, 0.25em);
    &::before {
      transform: translate3d(0, 0.5em, -1em);
    }
  }
  &:active {
    transform: translate(0em, 0.75em);
    &::before {
      transform: translate3d(0, 0, -1em);
    }
  }
`;

const StyledVoteEventCard = styled.span`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  background: linear-gradient(to left, white, #d9d9d9);
  height: 250px;
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
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  background: transparent;
  vertical-align: middle;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  font-family: inherit;
  padding: 1em 2em;
  border-radius: 1em;
  transform-style: preserve-3d;
  transition: all 175ms cubic-bezier(0, 0, 1, 1);
  &::before {
    position: absolute;
    /* width: 100%;
    height: 100%; */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    transform: translate3d(0, 0.75em, -1em);
    transition: all 175ms cubic-bezier(0, 0, 1, 1);
  }
  &:hover {
    transform: translate(0, 0.375em);
  }
  &:hover::before {
    transform: translate3d(0, 0.75em, -1em);
  }
  &:active {
    transform: translate(0em, 0.75em);
  }
  &:active::before {
    transform: translate3d(0, 0, -1em);
  }
`;

const StyledVoteButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
`;

export default Votepage;
