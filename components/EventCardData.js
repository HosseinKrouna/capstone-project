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
export default function EventCardData({ item }) {
	return (
		<StyledCardContainer>
			<StyledEventTitle>{item.title}</StyledEventTitle>

			<StyledFromText>From: </StyledFromText>
			<StyledToText>To: </StyledToText>
			<StyledWhereText>Where? </StyledWhereText>
			<StyledStartTime>{item.startTime}</StyledStartTime>
			<StyledOptionImage
				src={optionIcons[0].imageSrc}
				alt="Option Image"
				width={30}
				height={30}
			/>
			<StyledEndTime>{item.endTime}</StyledEndTime>
			<StyledLocation>{item.location}</StyledLocation>
			<StyledVoteResult>
				{!item.voteResult ? "Vote Now!!" : "Your Vote: "}
				{item.voteResult}
			</StyledVoteResult>
		</StyledCardContainer>
	);
}
