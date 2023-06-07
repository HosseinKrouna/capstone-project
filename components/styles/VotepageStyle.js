import styled from "styled-components";
import Image from "next/image";

export const StyledEmojiCheckmark = styled.span`
	font-size: 30px;
`;

export const StyledVoteTitle = styled.h2`
	font-size: 55px;
	font-weight: 500;
	color: #fdfdfe;
	text-shadow: 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,
		0px 0px 20px #b393d3;
	padding: 3px;
	margin: 0;
`;

export const StyledVoteEventCard = styled.span`
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
	padding: 10px;
	border-radius: 8px;
	background: linear-gradient(to left, #bef8fc, #056cb6);
	height: 450px;
	width: 350px;
	border: solid 6px;
	box-shadow: 0 1rem 1.25rem 0 rgba(22, 75, 195, 0.5),
		0 -0.25rem 1.5rem rgba(110, 15, 155, 1) inset,
		0 0.75rem 0.5rem rgba(255, 255, 255, 0.4) inset,
		0 0.25rem 0.5rem 0 rgba(180, 70, 207, 1) inset;
`;

export const StyledMain = styled.main`
	display: flex;
	height: 85vh;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	justify-content: space-between;
`;

export const StyledVoteButtons = styled.button`
	position: relative;
	display: inline-block;
	cursor: pointer;
	outline: none;
	border: 0;
	background: transparent;
	vertical-align: middle;
	text-decoration: none;
	font-size: 1.5rem;
	font-weight: 700;
	text-transform: uppercase;
	font-family: inherit;
	padding: 1em 2em;
	border-radius: 1em;
	transform-style: preserve-3d;
	transition: all 175ms cubic-bezier(0, 0, 1, 1);
	&::before {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: inherit;
		transform: translate3d(0, 0.75em, -1em);
		transition: all 175ms cubic-bezier(0, 0, 1, 1);
	}
	&:hover {
		transform: translate(0, 0.375em);
	}
	&:hover::before {
		transform: translate3d(0, 0.75em, -1em);
	}
	&:active {
		transform: translate(0em, 0.75em);
	}
	&:active::before {
		transform: translate3d(0, 0, -1em);
	}
`;

export const StyledVoteButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 10px;
`;

export const StyledLogInVoteImage = styled(Image)`
	cursor: pointer;

	&:hover {
		transform: translate(0, 0.375em);
	}
	&:hover::before {
		transform: translate3d(0, 0.75em, -1em);
	}
	&:active {
		transform: translate(0em, 0.75em);
	}
	&:active::before {
		transform: translate3d(0, 0, -1em);
	}
`;
