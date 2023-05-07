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
export default function EventCardData({ entry }) {
	return (
		<StyledCardContainer>
			<StyledFromText>From: </StyledFromText>
			<StyledToText>To: </StyledToText>
			<StyledWhereText>Where? </StyledWhereText>
			<StyledEventTitle>{entry.title}</StyledEventTitle>
			<StyledStartTime>{entry.startTime}</StyledStartTime>
			<StyledOptionImage
				src={optionIcons[0].imageSrc}
				alt="Option Image"
				width={30}
				height={30}
			/>
			<StyledEndTime>{entry.endTime}</StyledEndTime>
			<StyledLocation>{entry.location}</StyledLocation>
			<StyledVoteResult>
				{!entry.voteResult ? "Vote Now!!" : "Your Vote: "}
				{entry.voteResult}
			</StyledVoteResult>
		</StyledCardContainer>
	);
}
