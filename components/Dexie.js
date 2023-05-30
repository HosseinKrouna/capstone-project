import Dexie from "dexie";

export const db = new Dexie("eventCards");
db.version(1).stores({
	eventDetails:
		"++id, eventId, title, startTime, endTime, location, introduce, creator, voteResult",
});
db.open();
