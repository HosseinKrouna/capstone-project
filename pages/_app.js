import GlobalStyle from "@/styles";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import { useLiveQuery } from "dexie-react-hooks";
import Dexie from "dexie";

const db = new Dexie("eventCards");
db.version(1).stores({
	eventDetails: "++id,title,startTime,endTime,location,introduce,creator",
});

const { eventDetails } = db;

export default function App({ Component, pageProps }) {
	const alignItems = useLiveQuery(() => eventDetails.toArray(), []);
	console.log("======>", alignItems);

	//-------------------------------------------------------------------------------------------------------------
	function handleEntryData(data) {
		console.log(data);
	}
	//-------------------------------------------------------------------------------------------------------------
	// function handleUpdateVoteEvent(resultVoteEvent) {
	// 	console.log(resultVoteEvent);

	// console.log(resultVoteEvent);
	// setEntryData((draft) => {
	// 	const votedEvent = draft.find(
	// 		(voteEvent) => voteEvent.id === resultVoteEvent.id
	// 	);
	// 	votedEvent.voteResult = resultVoteEvent.voteResult;
	// });
	// }
	//-------------------------------------------------------------------------------------------------------------
	return (
		<>
			<GlobalStyle />
			<Head>
				<title>Capstone Project</title>
			</Head>
			<main>
				<Component
					{...pageProps}
					// entryData={entryData}
					onHandleEntryData={handleEntryData}
					// createEventFormRef={createEventFormRef}
					// onHandleUpdateVoteEvent={handleUpdateVoteEvent}
				/>
			</main>
		</>
	);
}
