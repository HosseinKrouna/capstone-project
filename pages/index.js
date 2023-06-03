import EventsList from "../components/EventsList";
import {
	StyledHeaderHomepage,
	StyledAppTitle,
} from "../components/styles/Homepage";
import { StyledAddEventLink } from "../components/styles/AddEventLink";
import { Animated } from "react-animated-css";
import Image from "next/image";
import { optionIcons } from "@/Icons/optionIcon";
import { Paper, Stack, Grid, Item } from "@mui/material";
import { ErrorBoundary } from "react-error-boundary";
export default function Homepage({
	allItems,
	voteResultData,
	currentVoteIconImage,
}) {
	console.log("====> allItems: ", allItems);

	//TODO -
	// fix: plus-icon responsive positioning
	// add: Animation pointing to the plaus icon when the event list is empty
	return (
		<>
			<StyledHeaderHomepage>
				<StyledAppTitle>Friends Wall</StyledAppTitle>
			</StyledHeaderHomepage>
			<ErrorBoundary>
				<EventsList
					currentVoteIconImage={currentVoteIconImage}
					allItems={allItems}
					voteResultData={voteResultData}
				/>
			</ErrorBoundary>
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
