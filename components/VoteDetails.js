import { Stack } from "@mui/material";
import styled from "styled-components";

export default function VoteDetails({ currentEvent }) {
	return (
		<Stack>
			<StyledVoteCardDetails>
				<StyledListItem>{currentEvent?.title}</StyledListItem>
				<StyledListItem>{currentEvent?.startTime}</StyledListItem>
				<StyledListItem>{currentEvent?.endTime}</StyledListItem>
				<StyledListItem>{currentEvent?.location}</StyledListItem>
				<StyledListItem>{currentEvent?.intoduce}</StyledListItem>
				<StyledListItem>{currentEvent?.creator}</StyledListItem>
			</StyledVoteCardDetails>
		</Stack>
	);
}

const StyledListItem = styled.li`
	font-size: 27px;
	font-weight: 900;
`;

const StyledVoteCardDetails = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	list-style: none;
	padding: 0;
`;
