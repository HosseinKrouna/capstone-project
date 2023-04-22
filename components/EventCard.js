import {
	StyledCardContainer,
	StyledEndTime,
	StyledEventTitle,
	StyledLocation,
	StyledStartTime,
	StyledVoteResult,
} from "./styles/CardContainer";
export default function EventCard({ entry }) {
	function handleDeleteCard() {}

	return (
		<StyledCardContainer>
			<span onClick={handleDeleteCard}>X</span>
			<StyledEventTitle>{entry.title}</StyledEventTitle>
			<StyledStartTime>{entry.startTime}</StyledStartTime>
			<StyledEndTime>{entry.endTime}</StyledEndTime>
			<StyledLocation>{entry.location}</StyledLocation>
			<StyledVoteResult>{entry.voteResult}</StyledVoteResult>
		</StyledCardContainer>
	);
}
