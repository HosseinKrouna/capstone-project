import { Stack } from "@mui/material";
import styled from "styled-components";
import Image from "next/image";
import { voteIcons } from "@/Icons/dataIcons";

export default function DetailsEventData({ allItems, currentEvent }) {
	//TODO - fix: set voteResetImage (index 0) to hidden
	console.log("=====>", currentEvent);
	// const currentEventDetails = allItems?.find((voteEvent) => voteEvent.eventId === currentEvent.eventId.id);

	return (
		<Stack>
			<StyledDetailsCard>
				{/* <StyledListItem>
					{!currentEvent.voteResult ? (
						"Are You there?"
					) : (
						<Image
							src={voteIcons[currentEvent.voteResult].imageSrc}
							alt={voteIcons[currentEvent.voteResult].description}
							width={30}
							height={30}
						/>
					)}
				</StyledListItem> */}
				<StyledListItem>{currentEvent?.title}</StyledListItem>
				<StyledListItem>{currentEvent?.startTime}</StyledListItem>
				<StyledListItem>{currentEvent?.endTime}</StyledListItem>
				<StyledListItem>{currentEvent?.location}</StyledListItem>
				<StyledListItem>{currentEvent?.introduce}</StyledListItem>
				<StyledListItem>{currentEvent?.creator}</StyledListItem>
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
