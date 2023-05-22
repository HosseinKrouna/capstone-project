import GlobalStyle from "@/styles";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/components/Dexie";

// export const eventDetailsTable = db.table("eventDetails");
const { eventDetails } = db;

export default function App({ Component, pageProps }) {
	const allItems = useLiveQuery(() => eventDetails.toArray(), []);
	console.log("======>", allItems);

	const [currentVoteIconImage, setCurrentVoteIconImage] = useState();
	//-------------------------------------------------------------------------------------------------------------

	async function handleEntryData(data) {
		// const newData = { ...data, id: uuidv4() };
		// setEntryData([newData, ...entryData]);
		// console.log(entryData);
		// console.log(newData);

		try {
			await db.eventDetails.add({
				eventId: uuidv4(),
				title: data.title,
				startTime: data.startTime,
				endTime: data.endTime,
				location: data.location,
				introduce: data.introduce,
				creator: data.creator,
			});
		} catch (error) {
			alert(`Error: ${error}`);
		}
	}

	function handleDeleteEvent(item) {
		console.log(item);
		// 	setDeleteEvent(currentEvent);
		// setDeleteEvent(item);
		// console.log(item);
		// async (id) => eventDetails.delete(item.id);
		// setDeleteEvent(item);
	}
	//-------------------------------------------------------------------------------------------------------------
	function handleUpdateVoteEvent(resultVoteEvent) {
		// setEntryData((draft) => {
		// 	const votedEvent = draft.find(
		// 		(voteEvent) => voteEvent.id === resultVoteEvent.id
		// 	);
		// 	votedEvent.voteResult = resultVoteEvent.voteResult;
		// });
	}
	//-------------------------------------------------------------------------------------------------------------

	function handleCurrentVoteElement(currentVoteIcon) {
		// const currentVoteIconImage = currentVoteIcon;

		// console.log("currentVoteIconImage ======> ", currentVoteIconImage);
		console.log(currentVoteIcon);
		setCurrentVoteIconImage(currentVoteIcon);
		console.log(currentVoteIconImage);
	}

	return (
		<>
			<GlobalStyle />
			<Head>
				<title>Capstone Project</title>
			</Head>
			<main>
				<Component
					// currentVoteIconImage={currentVoteIconImage}
					onHandledeleteEvent={handleDeleteEvent}
					{...pageProps}
					allItems={allItems}
					onHandleEntryData={handleEntryData}
					onHandleUpdateVoteEvent={handleUpdateVoteEvent}
					// onHandleCurrentVoteElement={handleCurrentVoteElement}
				/>
			</main>
		</>
	);
}
