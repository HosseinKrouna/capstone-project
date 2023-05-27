import styled from "styled-components";
import Link from "next/link";

export const StyledBackLink = styled(Link)`
	align-self: flex-start;
	margin: 0px;
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
	/* transform-style: preserve-3d;
	transition: all 175ms cubic-bezier(0, 0, 1, 1); */

	/* background-image: url("../../Icons/zuruck.png"); */
	/* padding: 10px;
	margin: 0;
	text-decoration: none;
	text-align: center;
	width: 80px;
	height: 50px;
	cursor: pointer;
	background: #fff;
	margin: 10px;
	border: none;
	border-radius: 23px;
	box-shadow: -5px -5px 15px #051937, 5px 5px 15px #004d7a,
		inset 5px 5px 10px #008793, inset -5px -5px 10px #051937;
	color: #222;
	font-size: 16px;
	&:hover {
		box-shadow: -5px -5px 15px #444, 5px 5px 15px #222, inset 5px 5px 10px #222,
			inset -5px -5px 10px #444;
		font-size: 15px;
		transition: 500ms;
	} */
`;
