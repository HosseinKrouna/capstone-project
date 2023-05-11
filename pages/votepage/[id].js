import { useRouter } from "next/router";
import { useState } from "react";
import { StyledBackLink } from "@/components/styles/BackLink";
import VoteDetails from "@/components/VoteDetails";
import { voteIcons } from "@/Icons/dataIcons/";
import Image from "next/image";
import {
	StyledEmojiCheckmark,
	StyledVoteTitle,
	StyledButtonConfirm,
	StyledVoteEventCard,
	StyledMain,
	StyledVoteButtons,
	StyledVoteButtonContainer,
} from "@/components/styles/VotepageStyle";

function Votepage({ allItems, onHandleUpdateVoteEvent }) {
	const [voteCheckmarkImage, setVoteCheckmarkImage] = useState();
	const router = useRouter();
	const { id } = router.query;
	const currentEvent = allItems.find((entryToVote) => entryToVote.id === id);

	console.log(voteCheckmarkImage);

	function handleVoteResult() {
		const resultVoteEvent = {
			...currentEvent,
			voteResult: voteCheckmarkImage,
		};
		onHandleUpdateVoteEvent(resultVoteEvent);
	}

	return (
		<>
			<StyledMain>
				<StyledBackLink href="/">Home</StyledBackLink>

				<StyledVoteTitle>Voting</StyledVoteTitle>
				<StyledVoteEventCard>
					<VoteDetails currentEvent={currentEvent} />

					<StyledEmojiCheckmark>{voteCheckmarkImage}</StyledEmojiCheckmark>
				</StyledVoteEventCard>

				<StyledVoteButtonContainer>
					{voteIcons.map((voteIcon) => (
						<StyledVoteButtons
							key={voteIcon.id}
							onClick={() =>
								setVoteCheckmarkImage(
									<Image
										id="voteIcon"
										width={50}
										height={50}
										src={voteIcon.imageSrc}
										alt={voteIcon.description}
									/>
								)
							}
						>
							<Image
								id="voteIcon"
								width={80}
								height={80}
								src={voteIcon.imageSrc}
								alt={voteIcon.description}
							/>
						</StyledVoteButtons>
					))}
				</StyledVoteButtonContainer>

				<StyledButtonConfirm type="button" onClick={handleVoteResult}>
					Confirm
				</StyledButtonConfirm>
			</StyledMain>
		</>
	);
}

export default Votepage;
