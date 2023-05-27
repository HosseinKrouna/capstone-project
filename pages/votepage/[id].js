import { useRouter } from "next/router";
import { useState } from "react";
import { StyledBackLink } from "@/components/styles/BackLink";
import VoteDetails from "@/components/VoteDetails";
import { voteIcons } from "@/Icons/dataIcons/";
import Image from "next/image";
import {
	StyledLogInVoteImage,
	StyledEmojiCheckmark,
	StyledVoteTitle,
	StyledVoteEventCard,
	StyledMain,
	StyledVoteButtons,
	StyledVoteButtonContainer,
} from "@/components/styles/VotepageStyle";
import { db } from "@/components/Dexie";
import { optionIcons } from "@/Icons/optionIcon";
const { eventDetails } = db;

function Votepage({ allItems }) {
	const [voteCheckmarkImage, setVoteCheckmarkImage] = useState();

	const router = useRouter();
	const { id } = router.query;
	const currentEvent = allItems?.find((voteEvent) => voteEvent.eventId === id);

	function handleVoteResult() {
		const currentVoteIcon = voteIcons.find(
			(voteIcon) => voteIcon.description === voteCheckmarkImage?.props.alt
		);

		eventDetails
			.where("eventId")
			.equals(currentEvent.eventId)
			.modify((voteEvent) => {
				voteEvent.voteResult = currentVoteIcon.id;
			});
	}

	return (
		<>
			<StyledMain>
				<StyledBackLink href="/">
					<Image
						src={optionIcons[3].imageSrc}
						alt={optionIcons[3].description}
						height={55}
						width={55}
					/>
				</StyledBackLink>
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
										width={50}
										height={50}
										src={voteIcon.imageSrc}
										alt={voteIcon.description}
									/>
								)
							}
						>
							<Image
								width={80}
								height={80}
								src={voteIcon.imageSrc}
								alt={voteIcon.description}
							/>
						</StyledVoteButtons>
					))}
				</StyledVoteButtonContainer>
				<StyledLogInVoteImage
					src={optionIcons[2].imageSrc}
					alt={optionIcons[2].description}
					width={45}
					height={45}
					onClick={handleVoteResult}
				/>
			</StyledMain>
		</>
	);
}

export default Votepage;
