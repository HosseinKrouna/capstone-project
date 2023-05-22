import {
	StyledCardContainer,
	StyledEndTime,
	StyledEventTitle,
	StyledLocation,
	StyledStartTime,
	StyledVoteResult,
	StyledOptionImage,
	StyledFromText,
	StyledToText,
	StyledWhereText,
} from "./styles/CardContainer";
import { useState } from "react";
import { optionIcons } from "@/Icons/optionIcon";
import { useRouter } from "next/router";
import Image from "next/image";
import { db } from "./Dexie";
import { voteIcons } from "@/Icons/dataIcons";
const { eventDetails } = db;

export default function EventCardData({
	onHandleCurrentVoteElement,
	currentEvent,
	item,
	allItems,
	onHandleDeleteEvent,
	currentVoteIconImage,
}) {
	const [filterVoteIcon, setFilterVoteIcon] = useState();

	console.log(filterVoteIcon);

	// console.log("voteIcons =====> ", voteIcons[0].imageSrc);
	// const voteIconImage = voteIcons.filter((voteIcon) => {
	// 	return voteIcon.id === eventDetails.voteResult;
	// });
	// console.log("voteIconImage =====> ", voteIconImage);
	// const voteIconItem = voteIcons.find(
	// 	(voteIcon) => voteIcon.id === item.voteResult
	// );
	// const router = useRouter();
	// const { id } = router.query;
	// const currentDeleteEvent = allItems.find(
	// 	(entryToDelete) => entryToDelete.id === id
	// );
	// const voteImage = allItems?.find(
	// 	(voteEvent) => voteEvent.eventId === item.id
	// );
	// console.log("voteImage ====> ", voteImage);
	// console.log("item ====> ", item);
	console.log("currentVoteIconImage =====> ", currentVoteIconImage);
	//FIXME -  vouteResult aus db ??? is the id from voteicon
	// const voteItem = voteIcons.find(
	// 	(voteIcon) => voteIcon.id === currentVoteIconImage.id
	// );
	// console.log(voteItem);
	// const currentItem = item.find(
	// 	(voteItem) => voteItem.eventId === currentEvent.id
	// );
	// console.log(currentItem);

	function handleDelete() {
		console.log("You are clicked Delete Event");
	}
	// function handlePicItemToDeleteEvent(item) {
	// console.log(deleteEvent);
	// }

	return (
		<StyledCardContainer>
			<StyledEventTitle>{item.title}</StyledEventTitle>

			<StyledFromText>From: </StyledFromText>
			<StyledToText>To: </StyledToText>
			<StyledWhereText>Where? </StyledWhereText>
			<StyledStartTime>{item.startTime}</StyledStartTime>
			<StyledOptionImage
				onClick={handleDelete}
				src={optionIcons[0].imageSrc}
				alt="option_delete_image"
				width={30}
				height={30}
			/>
			<StyledEndTime>{item.endTime}</StyledEndTime>
			<StyledLocation>{item.location}</StyledLocation>
			<StyledVoteResult>
				{/* {!item.voteResult ? "Vote Now!!" : setFilterVoteIcon()} */}

				{
					<Image
						src={voteIcons[item.voteResult]?.imageSrc}
						alt={voteIcons[item.voteResult]?.description}
						width={20}
						height={20}
					/>
				}

				{/* // : `Your Vote:  ${( */}
				{/* // 		<Image */}
				{/* // 			src={voteIcons[voteIconImage.voteResult].imageSrc}
					// 			alt={voteIcons[voteIconImage.voteResult].description}
					// 			width={20}
					// 			height={20}
					// 		/>
					//   )}`}
 */}
				{/* <Image
					src={voteIcon.imageSrc}
					alt={voteIcon.description}
					width={20}
					height={20}
				/> */}
			</StyledVoteResult>
		</StyledCardContainer>
	);
}
