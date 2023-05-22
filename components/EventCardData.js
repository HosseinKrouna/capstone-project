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
import { optionIcons } from "@/Icons/optionIcon";
import Image from "next/image";
import { voteIcons } from "@/Icons/dataIcons";

export default function EventCardData({ item }) {
	function handleDelete() {
		console.log("You are clicked Delete Event");
	}

	return (
		<StyledCardContainer>
			<StyledEventTitle>{item.title}</StyledEventTitle>

			<StyledFromText>From: </StyledFromText>
			<StyledToText>To: </StyledToText>
			<StyledWhereText>Where? </StyledWhereText>
			<StyledStartTime>{item.startTime}</StyledStartTime>
			<StyledOptionImage
				onClick={handleDelete}
				src={optionIcons[0].imageSrc}
				alt="option_delete_image"
				width={30}
				height={30}
			/>
			<StyledEndTime>{item.endTime}</StyledEndTime>
			<StyledLocation>{item.location}</StyledLocation>
			<StyledVoteResult>
				{!item.voteResult ? "Vote Now!" : "Your Vote: "}
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
