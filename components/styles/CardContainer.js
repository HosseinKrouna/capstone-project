import styled from "styled-components";
import Image from "next/image";

export const StyledCardContainer = styled.div`
	display: grid;
	grid-template-areas:
		"eventTitel ."
		"eventDescription optionIcon"
		"voteDescription voteResultIcon";
	column-gap: 2px;
	row-gap: 2px;

	/* display: flex;
	flex-direction: column;
	justify-items: center; */
	/* height: 180px;
	width: 400px; */

	/* flex-direction: column; */
	/* align-items: center; */
`;
export const StyledEventTitle = styled.h2`
	text-decoration: solid underline 4px;
`;
export const StyledVoteResult = styled.span`
	/* align-self: flex-end;
	border: solid 3px;
	margin-right: 25px;
	border-radius: 50%;
	padding: 10px; */
`;
export const StyledStartTime = styled.span``;
export const StyledEndTime = styled.span``;
export const StyledLocation = styled.span``;

export const StyledOptionImage = styled(Image)`
	cursor: pointer;
`;
