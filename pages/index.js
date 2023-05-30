import EventsList from "../components/EventsList";
import {
	StyledHeaderHomepage,
	StyledAppTitle,
} from "../components/styles/Homepage";
import { StyledAddEventLink } from "../components/styles/AddEventLink";
import Head from "next/head";
import { Animated } from "react-animated-css";
import Image from "next/image";
import { optionIcons } from "@/Icons/optionIcon";
import { Paper, Stack, Grid, Item } from "@mui/material";
export default function Homepage({
	allItems,
	voteResultData,
	currentVoteIconImage,
}) {
	console.log(currentVoteIconImage);

	//TODO -
	// fix: plus-icon responsive positioning
	// add: Animation pointing to the plaus icon when the event list is empty
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
				/>
			</Head>
			<StyledHeaderHomepage>
				<Animated animationIn="flash" animationOut="fadeOut" isVisible={true}>
					<StyledAppTitle>Friends Wall</StyledAppTitle>
				</Animated>
			</StyledHeaderHomepage>
			<EventsList
				currentVoteIconImage={currentVoteIconImage}
				allItems={allItems}
				voteResultData={voteResultData}
			/>

			<Stack>
				<Stack>
					<StyledAddEventLink href="/createEventPage">
						<Image
							src={optionIcons[1].imageSrc}
							alt={optionIcons[1].description}
							width={70}
							height={70}
						/>
					</StyledAddEventLink>
				</Stack>
			</Stack>
		</>
	);
}
