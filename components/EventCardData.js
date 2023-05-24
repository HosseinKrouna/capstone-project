import {
	StyledCardContainer,
	StyledEndTime,
	StyledEventTitle,
	StyledLocation,
	StyledStartTime,
	StyledVoteResult,
	StyledOptionImage,
	StyledFromText,
	StyledToText,
	StyledWhereText,
} from "./styles/CardContainer";
import Image from "next/image";
import { voteIcons } from "@/Icons/dataIcons";
import { optionIcons } from "@/Icons/optionIcon";
import { useRouter } from "next/router";

export default function EventCardData({ item }) {
	const router = useRouter();
	// const { id } = router.query;
	// const currentEvent = allItems.find((voteEvent) => voteEvent.eventId === id);

	function handleEdit() {
		router.push(`/editPage/${item.eventId}`);
	}

	return (
		<StyledCardContainer>
			<Image
				onClick={handleEdit}
				src={optionIcons[0].imageSrc}
				alt={optionIcons[0].description}
				width={30}
				height={30}
			/>
			<StyledEventTitle>{item.title}</StyledEventTitle>

			<StyledFromText>From: </StyledFromText>
			<StyledToText>To: </StyledToText>
			<StyledWhereText>Where? </StyledWhereText>
			<StyledStartTime>{item.startTime}</StyledStartTime>

			<StyledEndTime>{item.endTime}</StyledEndTime>
			<StyledLocation>{item.location}</StyledLocation>
			<StyledVoteResult>
				{!item.voteResult ? (
					<Image
						src={optionIcons[4].imageSrc}
						alt={optionIcons[4].description}
						width={30}
						height={30}
					/>
				) : (
					"Your Vote: "
				)}
				{!item.voteResult ? null : (
					<Image
						src={voteIcons[item.voteResult].imageSrc}
						alt={voteIcons[item.voteResult].description}
						width={30}
						height={30}
					/>
				)}
			</StyledVoteResult>
		</StyledCardContainer>
	);
}
