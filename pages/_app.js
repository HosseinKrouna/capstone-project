import GlobalStyle from "@/styles";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/components/Dexie";

const { eventDetails } = db;

export default function App({ Component, pageProps }) {
	const allItems = useLiveQuery(() => eventDetails.toArray(), []);

	//-------------------------------------------------------------------------------------------------------------

	function handleEntryData(dataFromHandleSubmit) {
		db.open();
		db.transaction("rw", eventDetails, function () {
			eventDetails.add({
				eventId: dataFromHandleSubmit.eventId,
				title: dataFromHandleSubmit.title,
				startTime: dataFromHandleSubmit.startTime,
				endTime: dataFromHandleSubmit.endTime,
				location: dataFromHandleSubmit.location,
				introduce: dataFromHandleSubmit.introduce,
				creator: dataFromHandleSubmit.creator,
			});
		}).catch((event) => {
			alert(event.stack || event);
		});
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
