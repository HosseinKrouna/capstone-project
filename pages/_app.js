import GlobalStyle from "@/styles";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
export default function App({ Component, pageProps }) {
	//-------------------------------------------------------------------------------------------------------------
	const [entryData, setentryData] = useState();
	console.log(entryData);
	function handleEntryData(data) {
		setentryData([data]);
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
					entryData={entryData}
					{...pageProps}
					onHandleEntryData={handleEntryData}
					// onHandleUpdateVoteEvent={handleUpdateVoteEvent}
				/>
			</main>
		</>
	);
}
