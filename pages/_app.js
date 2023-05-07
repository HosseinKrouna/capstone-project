import GlobalStyle from "@/styles";
import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import { useImmerLocalStorageState } from "@/lib/hooks";
import { useState } from "react";

export default function App({ Component, pageProps }) {
	const dbRequest = window.indexedDB.open("EventCards", 2);
	let db = null;

	// useImmerLocalStorageState("entryData", {
	// 	defaultValue: [],
	// });

	// Set of data

	// Show set of data for form
	function handleEntryData(data) {
		let newDataAddId = { ...data, id: uuidv4() };
		console.log(data);
		console.log(newDataAddId);

		let entries = makeTransaction("entries", "readwrite");

		let request = entries.add(newDataAddId);
		request.addEventListener("success", (event) => {
			console.log(event.target.result);
			document.querySelector("#createEventForm").reset();
		});
		request.addEventListener("error", (event) => {
			console.log(event.target.error);
		});

		// Transaction
		function makeTransaction(storeName, mode, callback = null) {
			//FIXME - 	let transaction = db.transaction(storeName, mode);
			transaction.addEventListener("error", (event) => {
				console.log(event.target.error);
			});

			transaction.addEventListener("complete", (event) => {
				console.log("Transaction complete");
				if (typeof callback === "function") callback();
			});
			return transaction.objectStore(storeName);
		}

		// let newEntrie = [newData, ...entryData];
		// console.log(newEntrie);
	}

	// function handleUpdateVoteEvent(resultVoteEvent) {
	// 	console.log(resultVoteEvent);

	// open database

	// database EventHandling
	dbRequest.addEventListener("upgradeneeded", (event) => {
		console.log(
			"Upgrade from version",
			event.oldVersion,
			"to",
			event.newVersion
		);
		db = event.target.result;

		let objectStore = db.createObjectStore("entries", {
			keyPath: "id",
			autoIncrement: true,
		});
	});

	dbRequest.addEventListener("success", (event) => {
		console.log("Success");
	});

	dbRequest.addEventListener("error", (event) => {
		console.error(event.target.error);
	});

	// console.log(resultVoteEvent);
	// setEntryData((draft) => {
	// 	const votedEvent = draft.find(
	// 		(voteEvent) => voteEvent.id === resultVoteEvent.id
	// 	);
	// 	votedEvent.voteResult = resultVoteEvent.voteResult;
	// });
	// }

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
					// onHandleUpdateVoteEvent={handleUpdateVoteEvent}
				/>
			</main>
		</>
	);
}
