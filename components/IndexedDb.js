const indexedDb = window.indexedDB;

const dbRequest = indexedDb.open("EventCards", 1);

request.error = function (event) {
	console.error("An error occured with indexedDb");
	console.error(event);
};

request.onupgradeneeded = function () {
	const db = request.result;
	const store = db.createObjectStore("eventEntries", { keyPath: "id" });

	store.createIndex(
		"entries_and_voteResult",
		[
			"title",
			"startTime",
			"endTime",
			"location",
			"description",
			"creator",
			"voteResult",
		],
		{ unique: false }
	);
};

request.onsuccess = function () {
	const db = request.result;
	const transaction = db.transaction("eventEntries", "readwrite");
	const store = transaction.objectStore("eventEntries");
	const entriesAndVoteResultIndex = store.index("entries_and_voteResult");

	store.put({ id: 1, title: "Fahrradtour", startTime: "12:00" });

	const idQuery = store.get(1);
	const entriesAndVoteResultQuery = entriesAndVoteResultIndex.getAll([""]);
};
