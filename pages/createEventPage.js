import MuiCreateEventForm from "@/components/MuiCreateEventForm";
import { StyledBackLink } from "@/components/styles/BackLink";
import { Paper, Stack, Grid, Item } from "@mui/material";
import styled from "styled-components";
import Image from "next/image";
import { optionIcons } from "@/Icons/optionIcon";

function CreateEventForm({ onHandleEntryData }) {
	return (
		<>
			<Stack justifyContent="center" alignItems="center">
				<Stack direction="row">
					<StyledBackLink href="/">
						<Image
							src={optionIcons[3].imageSrc}
							alt={optionIcons[3].description}
							height={45}
							width={45}
						/>
					</StyledBackLink>
					<StyledCreateEventPageTitle>
						Create New Event
					</StyledCreateEventPageTitle>
				</Stack>
				<MuiCreateEventForm onHandleEntryData={onHandleEntryData} />;
			</Stack>
		</>
	);
}

const StyledCreateEventPageTitle = styled.h2`
	font-size: 35px;
	font-weight: 700;
	color: #fdfdfe;
	text-shadow: 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,
		0px 0px 20px #b393d3;
	padding: 2px;
`;

export default CreateEventForm;
