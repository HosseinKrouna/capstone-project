import styled from "styled-components";
import Image from "next/image";

export const StyledCardContainer = styled.div`
	display: grid;
	width: vw;
	height: vh;
	/* grid-template-columns: 1fr 2fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr; */
	grid-template-areas:
		"eventTitel eventTitel eventTitel "
		"startTime startTime optionIcon"
		"endTime endTime optionIcon"
		"location location location"
		"voteResultIcon voteResultIcon voteResultIcon ";
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
export const StyledEventTitle = styled.h2`
	grid-area: eventTitel;
	text-decoration: solid underline 4px;
	margin: 0;
`;
export const StyledVoteResult = styled.span`
	/* align-self: flex-end;
	border: solid 3px;
	margin-right: 25px;
	border-radius: 50%;
	padding: 10px; */
`;
export const StyledStartTime = styled.span`
	grid-area: startTime;
`;
export const StyledEndTime = styled.span`
	grid-area: endTime;
`;
export const StyledLocation = styled.span`
	grid-area: location;
`;

export const StyledOptionImage = styled(Image)`
	grid-area: optionIcon;
	cursor: pointer;
`;
