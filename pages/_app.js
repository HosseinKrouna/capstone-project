import GlobalStyle from "@/styles";
import Head from "next/head";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/components/Dexie";

const { eventDetails } = db;

export default function App({ Component, pageProps }) {
	const allItems = useLiveQuery(() => eventDetails.toArray(), []);
	console.log("====> allItems: ", allItems);

	async function handleEntryData(dataFromHandleSubmit) {
		try {
			await db.open();
			await db.transaction("rw", eventDetails, async function () {
				const {
					eventId,
					title,
					startTime,
					endTime,
					location,
					introduce,
					creator,
				} = dataFromHandleSubmit;

				await eventDetails.add({
					eventId,
					title,
					startTime,
					endTime,
					location,
					introduce,
					creator,
					images: {
						id: newImage.id,
						url: newImage.url,
						alt: "uploaded image",
					},
				});
			});
		} catch (error) {
			alert(error.stack || error);
		}
	}

	function handleFormUploadSubmit(data) {
		console.log("data from muiForm to _app.js", data);
		const { public_id, secure_url } = data;
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
					onHandleFormUploadSubmit={handleFormUploadSubmit}
				/>
			</main>
		</>
	);
}
