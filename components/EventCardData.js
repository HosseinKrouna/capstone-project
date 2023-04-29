import { Stack } from "@mui/material";
import {
	StyledCardContainer,
	StyledEndTime,
	StyledEventTitle,
	StyledLocation,
	StyledStartTime,
	StyledVoteResult,
	StyledOptionImage,
} from "./styles/CardContainer";
import { optionIcons } from "@/Icons/optionIcon";

export default function EventCardData({ entry }) {
	return (
		<StyledCardContainer>
			<StyledEventTitle>{entry.title}</StyledEventTitle>
			<StyledStartTime>From: {entry.startTime}</StyledStartTime>
			<StyledOptionImage
				// onClick={() => onHandelDeleteEntry(entry.id)}
				src={optionIcons[0].imageSrc}
				alt="Option Image"
				width={30}
				height={30}
			/>
			<StyledEndTime>To: {entry.endTime}</StyledEndTime>
			<StyledLocation>Where? {entry.location}</StyledLocation>
			<StyledVoteResult>
				{!entry.voteResult ? "Vote Now!!" : "Your Vote: "}
				{entry.voteResult}
			</StyledVoteResult>
		</StyledCardContainer>
	);
}
