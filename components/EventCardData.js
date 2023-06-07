import {
	StyledCardContainer,
	StyledEndTime,
	StyledEventTitle,
	StyledLocation,
	StyledStartTime,
	StyledVoteResult,
	StyledFromText,
	StyledToText,
	StyledWhereText,
} from "./styles/CardContainer";
import Image from "next/image";
import { voteIcons } from "@/Icons/dataIcons";
import { optionIcons } from "@/Icons/optionIcon";

export default function EventCardData({ item }) {
	//TODO -
	// fix: sign limits
	console.log("====> item: ", item);

	const {
		images,
		creator,
		startTime,
		endTime,
		eventId,
		introduce,
		location,
		title,
		voteResult,
	} = item ?? {};
	return (
		<StyledCardContainer>
			<StyledEventTitle>{title}</StyledEventTitle>
			<Image src={images.url} alt={images.alt} width={40} height={40} />
			<StyledFromText>From: </StyledFromText>
			<StyledToText>To: </StyledToText>
			<StyledWhereText>Where? </StyledWhereText>
			<StyledStartTime>{startTime}</StyledStartTime>

			<StyledEndTime>{endTime}</StyledEndTime>
			<StyledLocation>{location}</StyledLocation>
			<StyledVoteResult>
				{!voteResult ? (
					<Image
						src={optionIcons[4].imageSrc}
						alt={optionIcons[4].description}
						width={30}
						height={30}
					/>
				) : (
					<p>Your Vote: </p>
				)}
				{!voteResult ? null : (
					<Image
						src={voteIcons[voteResult].imageSrc}
						alt={voteIcons[voteResult].description}
						width={30}
						height={30}
					/>
				)}
			</StyledVoteResult>
		</StyledCardContainer>
	);
}
