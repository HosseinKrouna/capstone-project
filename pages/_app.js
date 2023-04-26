import GlobalStyle from "@/styles";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import { useImmerLocalStorageState } from "@/lib/hooks";

export default function App({ Component, pageProps, children }) {
	const [entryData, setEntryData] = useImmerLocalStorageState("entryData", {
		defaultValue: [],
	});
	function handleEntryData(data) {
		const newData = { ...data, id: uuidv4() };
		setEntryData([newData, ...entryData]);
	}

	function handleUpdateVoteEvent(voteResultData) {
		setEntryData((draft) => {
			const votedEvent = draft.find(
				(voteEvent) => voteEvent.id === voteResultData.id
			);
			votedEvent.voteResult = voteResultData.voteResult;
		});
	}

	function handelDeleteEntry(id) {
		const newEntryData = entryData.filter((item) => item.id !== id);
		setEntryData(newEntryData);
	}

	return (
		<>
			<GlobalStyle />
			<Head>
				<title>Capstone Project</title>
			</Head>
			<main>
				<Component
					{...pageProps}
					entryData={entryData}
					onHandleEntryData={handleEntryData}
					onHandleUpdateVoteEvent={handleUpdateVoteEvent}
					onHandelDeleteEntry={handelDeleteEntry}
				/>
			</main>
		</>
	);
}
