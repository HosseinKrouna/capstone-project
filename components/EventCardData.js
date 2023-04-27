import {
	StyledCardContainer,
	StyledEndTime,
	StyledEventTitle,
	StyledLocation,
	StyledStartTime,
	StyledVoteResult,
} from "./styles/CardContainer";

export default function EventCardData({ entry }) {
	return (
		<>
			<StyledCardContainer>
				<StyledEventTitle>{entry.title}</StyledEventTitle>
				<StyledStartTime>From: {entry.startTime}</StyledStartTime>
				<StyledEndTime>To: {entry.endTime}</StyledEndTime>
				<StyledLocation>Where? {entry.location}</StyledLocation>
				<StyledVoteResult>Your Voteresult: {entry.voteResult}</StyledVoteResult>
			</StyledCardContainer>
		</>
	);
}
