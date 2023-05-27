import GlobalStyle from "@/styles";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/components/Dexie";

const { eventDetails } = db;

export default function App({ Component, pageProps }) {
	const allItems = useLiveQuery(() => eventDetails.toArray(), []);

	//-------------------------------------------------------------------------------------------------------------

	async function handleEntryData(data) {
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

	return (
		<>
			<GlobalStyle />
			<Head>
				<title>Capstone Project</title>
			</Head>
			<main>
				<Component
					{...pageProps}
					allItems={allItems}
					onHandleEntryData={handleEntryData}
				/>
			</main>
		</>
	);
}
