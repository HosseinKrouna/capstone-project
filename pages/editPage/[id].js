import MuiCreateEventForm from "@/components/MuiCreateEventForm";
import { StyledBackLink } from "@/components/styles/BackLink";
import { StyledCardContainer } from "@/components/styles/CardContainer";
import { useRouter } from "next/router";
import styled from "styled-components";
import { optionIcons } from "@/Icons/optionIcon";
import Image from "next/image";

function EditPage({ allItems }) {
	const router = useRouter();
	const { id } = router.query;
	const currentEvent = allItems.find((item) => item.eventId === id);

	//TODO - modify: turn page into edit
	// add: the delete function

	return (
		<>
			<StyledBackLink href={"/"}>
				<Image
					src={optionIcons[3].imageSrc}
					alt={optionIcons[3].description}
					width={45}
					height={45}
				/>
			</StyledBackLink>

			<StyledTitel>{currentEvent.title}</StyledTitel>

			{/* <MuiCreateEventForm></MuiCreateEventForm> */}

			{/* <StyledCardContainer>
				<span>Start Time: {currentEvent.startTime}</span>
				<span>End Time: {currentEvent.endTime}</span>
				<span>Location: {currentEvent.location}</span>
				<span>Let a Comment: {currentEvent.description}</span>
				<span>Creator: {currentEvent.creator}</span>
			</StyledCardContainer> */}
		</>
	);
}

const StyledTitel = styled.h1`
	font-size: 35px;
	font-weight: 700;
	color: #fdfdfe;
	text-shadow: 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,
		0px 0px 20px #b393d3;
	padding: 2px;
`;

export default EditPage;
