import Dexie from "dexie";

export const db = new Dexie("eventCards");
db.version(2).stores({
	eventDetails:
		"++id, eventId, title, startTime, endTime, location, introduce, creator, voteResult",
});
