import styled from "styled-components";

export const StyledEmojiCheckmark = styled.span`
	font-size: 30px;
`;

export const StyledVoteTitle = styled.h2`
	font-size: 40px;
	margin: 0;
`;

export const StyledButtonConfirm = styled.button``;

export const StyledVoteEventCard = styled.span`
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
	padding: 10px;
	border-radius: 4px;
	background: linear-gradient(to left, white, #d9d9d9);
	height: 350px;
	width: 350px;
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
