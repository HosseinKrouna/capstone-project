import styled from "styled-components";

export const StyledCardContainer = styled.div`
	font-size: small;
	grid-template-columns: 1fr 2fr 1fr 1fr;
	display: grid;
	width: vw;
	height: vh;
	grid-template-areas:
		"eventTitel eventTitel eventTitel eventTitel "
		"from startTime startTime optionIcon"
		"to endTime endTime optionIcon"
		"where location voteResultIcon voteResultIcon"
		". . voteResultIcon voteResultIcon ";
	column-gap: 2px;
	row-gap: 4px;
`;

export const StyledFromText = styled.span`
	grid-area: from;
	justify-self: end;
`;
export const StyledToText = styled.span`
	grid-area: to;
	justify-self: end;
`;
export const StyledWhereText = styled.span`
	justify-self: end;

	grid-area: where;
`;

export const StyledEventTitle = styled.h2`
	font-size: 27px;
	justify-self: center;
	grid-area: eventTitel;
	text-decoration: solid underline 4px;
	margin: 0;
`;
export const StyledVoteResult = styled.span`
	color: red;
	justify-self: center;
	align-self: start;
	grid-area: voteResultIcon;
`;
export const StyledStartTime = styled.span`
	justify-self: center;

	grid-area: startTime;
`;
export const StyledEndTime = styled.span`
	justify-self: center;

	grid-area: endTime;
`;
export const StyledLocation = styled.span`
	justify-self: end;

	grid-area: location;
`;
