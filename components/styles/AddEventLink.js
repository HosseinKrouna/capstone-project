import Link from "next/link";
import styled from "styled-components";

export const StyledAddEventLink = styled(Link)`
	position: fixed;
	bottom: 0;
	right: 10px;
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
