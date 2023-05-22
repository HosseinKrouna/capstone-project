import Link from "next/link";
import styled from "styled-components";
import EventCardData from "@/components/EventCardData";
import ConfettiExplosion from "react-confetti-explosion";

function EventsList({ allItems, currentVoteIconImage }) {
	console.log(allItems);
	console.log(currentVoteIconImage);

	return (
		<>
			{allItems ? (
				<StyledList>
					{allItems.map((item) => (
						<StyledListItem key={item.eventId}>
							<StyledLink href={`/votepage/${item.eventId}`}>
								<EventCardData item={item} />
							</StyledLink>
						</StyledListItem>
					))}
				</StyledList>
			) : (
				<ConfettiExplosion />
			)}
		</>
	);
}

const StyledListItem = styled.li`
	width: 350px;
	height: 150px;

	background-color: #e8f6f6;
	border: solid 5px;
	border-radius: 50px;
	box-shadow: 0 1rem 1.25rem 0 rgba(22, 75, 195, 0.5),
		0 -0.25rem 1.5rem rgba(376, 15, 155, 1) inset,
		0 0.75rem 0.5rem rgba(255, 255, 255, 0.4) inset,
		0 0.25rem 0.5rem 0 rgba(180, 70, 207, 1) inset;

	&:hover {
		transform: translate(0, 0.175em);
	}

	&:active {
		transform: translate(0em, 0.75em);
	}
`;

const StyledList = styled.ul`
	flex-direction: column;
	align-items: center;
	display: flex;
	padding: 0;
	list-style: none;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
	font-weight: 600;
	cursor: pointer;
	width: 300px;
	height: 200px;
`;

export default EventsList;
