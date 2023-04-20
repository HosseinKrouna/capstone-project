import {
	StyledCardContainer,
	StyledEndTime,
	StyledEventTitle,
	StyledLocation,
	StyledStartTime,
	StyledVoteResult,
} from "./styles/CardContainer";
export default function EventCard({ entry }) {
	return (
		<StyledCardContainer>
			<StyledEventTitle>{entry.title}</StyledEventTitle>
			<StyledStartTime>{entry.startTime}</StyledStartTime>
			<StyledEndTime>{entry.endTime}</StyledEndTime>
			<StyledLocation>{entry.location}</StyledLocation>
			<StyledVoteResult>{entry.voteResult}</StyledVoteResult>
		</StyledCardContainer>
	);
}
