import styled from "styled-components";
import Image from "next/image";

export const StyledCardContainer = styled.div`
	font-size: small;
	grid-template-columns: 1fr 2fr 1fr 1fr;
	display: grid;
	width: vw;
	height: vh;
	/* grid-template-columns: 1fr 2fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr; */
	grid-template-areas:
		"eventTitel eventTitel eventTitel eventTitel "
		"from startTime startTime optionIcon"
		"to endTime endTime optionIcon"
		"where location voteResultIcon voteResultIcon"
		". . voteResultIcon voteResultIcon ";
	column-gap: 2px;
	row-gap: 4px;

	/* display: flex;
	flex-direction: column;
	justify-items: center; */
	/* height: 180px;
	width: 400px; */

	/* flex-direction: column; */
	/* align-items: center; */
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
	/* align-self: flex-end;
	border: solid 3px;
	margin-right: 25px;
	border-radius: 50%;
	padding: 10px; */
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

export const StyledOptionImage = styled(Image)`
	grid-area: optionIcon;
	justify-self: center;
	cursor: pointer;
`;
