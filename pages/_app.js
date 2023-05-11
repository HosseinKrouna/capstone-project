import GlobalStyle from "@/styles";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

import { useLiveQuery } from "dexie-react-hooks";
import Dexie from "dexie";

const db = new Dexie("eventCards");
db.version(1).stores({
	eventDetails: "++id,title,startTime,endTime,location,introduce,creator",
});

const { eventDetails } = db;

export default function App({ Component, pageProps }) {
	const allItems = useLiveQuery(() => eventDetails.toArray(), []);
	// console.log("======>", allItems);

	//-------------------------------------------------------------------------------------------------------------
	const [entryData, setEntryData] = useState();

	console.log(entryData);

	async function handleEntryData(data) {
		await eventDetails.add({
			title: data.title,
			startTime: data.startTime,
			endTime: data.endTime,
			location: data.location,
			introduce: data.introduce,
			creator: data.creator,
		});

		setEntryData([data]);
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
	return (
		<>
			<GlobalStyle />
			<Head>
				<title>Capstone Project</title>
			</Head>
			<main>
				<Component
					allItems={allItems}
					entryData={entryData}
					{...pageProps}
					onHandleEntryData={handleEntryData}
					onHandleUpdateVoteEvent={handleUpdateVoteEvent}
				/>
			</main>
		</>
	);
}
