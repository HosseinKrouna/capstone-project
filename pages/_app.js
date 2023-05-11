import GlobalStyle from "@/styles";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";

export default function App({ Component, pageProps }) {
	//-------------------------------------------------------------------------------------------------------------
	function handleEntryData(data) {}
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
