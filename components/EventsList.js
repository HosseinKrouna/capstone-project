import Link from "next/link";
import styled from "styled-components";
import EventCard from "@/components/EventCard";
import Head from "next/head";
import { Animated } from "react-animated-css";
import { u1F389 } from "react-icons-kit/noto_emoji_regular/u1F389";
import Icon from "react-icons-kit";
import ConfettiExplosion from "react-confetti-explosion";

function EventsList({ entryData }) {
	const styleAlternativeEventListEmpty = {
		color: "#00ff00",
		textAlign: "center",
		paddingTop: "50px",
	};
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
				/>
			</Head>
			{entryData.length > 0 ? (
				<>
					<StyledList>
						{entryData.map((entry) => (
							<StyledListItem key={entry.id}>
								<StyledLink href={`/votepage/${entry.id}`}>
									<EventCard entry={entry} />
								</StyledLink>
							</StyledListItem>
						))}
					</StyledList>
				</>
			) : (
				<Animated
					animationIn="rotateInUpLeft"
					animationOut="slideOutUp"
					isVisible={true}
				>
					<span>
						<ConfettiExplosion />
						<Icon
							icon={u1F389}
							style={styleAlternativeEventListEmpty}
							size={200}
						/>
					</span>
				</Animated>
			)}
		</>
	);
}

const StyledListItem = styled.li`
	border: solid 5px;
	border-radius: 50px;
	box-shadow: 0 1rem 1.25rem 0 rgba(22, 75, 195, 0.5),
		0 -0.25rem 1.5rem rgba(376, 15, 155, 1) inset,
		0 0.75rem 0.5rem rgba(255, 255, 255, 0.4) inset,
		0 0.25rem 0.5rem 0 rgba(180, 70, 207, 1) inset;
	&::before {
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

const StyledList = styled.ul`
	padding: 0;
	list-style: none;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
	font-weight: 600;
	cursor: pointer;
	width: 300px;
	height: 250px;
`;

export default EventsList;
