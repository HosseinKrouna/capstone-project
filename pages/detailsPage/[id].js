import { useRouter } from "next/router";
import styled from "styled-components";
import {
	StyledVoteEventCard,
	StyledMain,
} from "@/components/styles/VotepageStyle";
import DetailsEventData from "@/components/DetailsEventData";

function DetailsPage({ allItems }) {
	const router = useRouter();
	const { id } = router.query;
	const currentEvent = allItems.find((item) => item.eventId === id);

	//TODO - Style Details Page
	// - add: BackLink
	// - add: EditPage Link
	// - add: voteResult

	return (
		<>
			<span>
				<StyledMain>
					<StyledTitle>{currentEvent.title}</StyledTitle>
					<DetailsEventData currentEvent={currentEvent} />
				</StyledMain>
			</span>
		</>
	);
}

const StyledTitle = styled.h1`
	color: white;
	font-size: 50px;
`;

export default DetailsPage;
