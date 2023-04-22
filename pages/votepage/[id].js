import { useRouter } from "next/router";
import styled from "styled-components";
import { useState } from "react";
import { StyledBackLink } from "@/components/styles/BackLink";
import VoteDetails from "@/components/VoteDetails";
import { voteIcons } from "@/Icons/dataIcons/";
import Image from "next/image";

function Votepage({ entryData, onHandleUpdateVoteEvent }) {
	// const voteIcons = [
	// 	,
	// 	"@/Icons/fragezeichen.png",
	// 	"@/Icons/absagen.png",
	// ];
	// const voteIconsToMap = voteIcons.map(voteIcon => <li>{voteIcon}</li>)

	const [emojiCheckmark, setEmojiCheckmark] = useState("");
	console.log(emojiCheckmark);
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
				<StyledBackLink href="/">Home</StyledBackLink>

				<StyledVoteTitle>Voting</StyledVoteTitle>
				<StyledVoteEventCard>
					<VoteDetails
						emojiCheckmark={emojiCheckmark}
						currentEvent={currentEvent}
						entryData={entryData}
					/>

					<StyledEmojiCheckmark>{emojiCheckmark}</StyledEmojiCheckmark>
				</StyledVoteEventCard>

				<StyledVoteButtonContainer>
					{voteIcons.map((voteIcon) => (
						<StyledVoteButtons
							onClick={() =>
								setEmojiCheckmark(
									<Image
										width={50}
										height={50}
										src={voteIcon.imageSrc}
										alt={voteIcon.description}
									/>
								)
							}
							key={voteIcon.id}
						>
							<Image
								width={80}
								height={80}
								src={voteIcon.imageSrc}
								alt={voteIcon.description}
							/>
						</StyledVoteButtons>
					))}
					{/* {voteIcons.map((voteIcon, index) => {
						return (
							<StyledVoteButtons
								onClick={() => setEmojiCheckmark(voteIcon)}
								key={index}
							>
								<span aria-label="Emoji image on vote button" role="img">
									{voteIcon}
								</span>
							</StyledVoteButtons>
						);
					})} */}
				</StyledVoteButtonContainer>

				<StyledButtonConfirm type="button" onClick={handleVoteResult}>
					Confirm
				</StyledButtonConfirm>
			</StyledMain>
		</>
	);
}

const StyledEmojiCheckmark = styled.span`
	font-size: 30px;
`;

const StyledVoteTitle = styled.h2`
	font-size: 40px;
	margin: 0;
`;

const StyledButtonConfirm = styled.button``;

const StyledVoteEventCard = styled.span`
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
	padding: 10px;
	border-radius: 4px;
	background: linear-gradient(to left, white, #d9d9d9);
	height: 350px;
	width: 350px;
`;

const StyledMain = styled.main`
	display: flex;
	height: 85vh;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	justify-content: space-between;
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
