import { Stack } from "@mui/material";
import styled from "styled-components";
import Image from "next/image";
import { voteIcons } from "@/Icons/dataIcons";
import { useEffect } from "react";
import { optionIcons } from "@/Icons/optionIcon";
export default function DetailsEventData({ allItems, currentEvent }) {
	//TODO - fix: set voteResetImage (index 0) to hidden
	// const currentEventDetails = allItems?.find((voteEvent) => voteEvent.eventId === currentEvent.eventId.id);
	// console.log("======> currentEvent: ", currentEvent);
	// useEffect(() => {
	// 	currentEvent;
	// });

	const {
		creator,
		startTime,
		endTime,
		eventId,
		introduce,
		location,
		title,
		voteResult,
	} = currentEvent ?? {};

	return (
		<Stack>
			<StyledDetailsCard>
				{
					<StyledListItem>
						{!voteResult ? null : (
							<Image
								src={voteIcons[voteResult].imageSrc}
								alt={voteIcons[voteResult].description}
								width={30}
								height={30}
							/>
						)}
						{voteResult ? <p>Are You still in?</p> : null}
						<a href={`/votepage/${eventId}`}>
							<Image
								src={optionIcons[4].imageSrc}
								alt={optionIcons[4].description}
								with={40}
								height={40}
							/>
						</a>
					</StyledListItem>
				}
				<StyledListItem>{title}</StyledListItem>
				<StyledListItem>{startTime}</StyledListItem>
				<StyledListItem>{endTime}</StyledListItem>
				<StyledListItem>{location}</StyledListItem>
				<StyledListItem>{introduce}</StyledListItem>
				<StyledListItem>{creator}</StyledListItem>
			</StyledDetailsCard>
		</Stack>
	);
}

const StyledListItem = styled.li`
	font-size: 27px;
	font-weight: 900;
`;

const StyledDetailsCard = styled.ul`
	display: flex;
	flex-direction: column;
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
