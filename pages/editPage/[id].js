import { StyledBackLink } from "@/components/styles/BackLink";
import { StyledCardContainer } from "@/components/styles/CardContainer";
import { useRouter } from "next/router";

function EditPage({ allItems }) {
	const router = useRouter();
	const { id } = router.query;
	const currentEvent = allItems.find((item) => item.eventId === id);

	//TODO - modify: turn page into edit
	// add: the delete function
	// add: BackLink

	return (
		<>
			<h1>{currentEvent.title}</h1>
			<StyledCardContainer>
				<span>Start Time: {currentEvent.startTime}</span>
				<span>End Time: {currentEvent.endTime}</span>
				<span>Location: {currentEvent.location}</span>
				<span>Let a Comment: {currentEvent.description}</span>
				<span>Creator: {currentEvent.creator}</span>
			</StyledCardContainer>

			<StyledBackLink aria-label="Homepage" href="/">
				Home
			</StyledBackLink>
		</>
	);
}

export default EditPage;
