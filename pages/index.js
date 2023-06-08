import EventsList from "../components/EventsList";
import {
	StyledHeaderHomepage,
	StyledAppTitle,
} from "../components/styles/Homepage";
import { StyledAddEventLink } from "../components/styles/AddEventLink";
import Image from "next/image";
import { optionIcons } from "@/Icons/optionIcon";
import { Stack } from "@mui/material";
export default function Homepage({
	allItems,
	voteResultData,
	currentVoteIconImage,
}) {
	//TODO -
	// fix: plus-icon responsive positioning
	// add: Animation pointing to the plaus icon when the event list is empty
	return (
		<>
			<StyledHeaderHomepage>
				<StyledAppTitle>Friends Wall</StyledAppTitle>
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
