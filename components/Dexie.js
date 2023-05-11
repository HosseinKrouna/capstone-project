// import Dexie from "dexie";
// import { useState } from "react";
// import MuiCreateEventForm from "@/components/MuiCreateEventForm";

// export default function DexieMounting() {
// <div>
// 	<button onClick={() => setOpen(open)}>{`${
// 		!open ? "Close" : "Open"
// 	} MuiCreateEventForm`}</button>
// 	{/* Pass in a new connection to the database when Form is first rendered */}
// 	{open && <MuiCreateEventForm db={new Dexie("FormDatabase")} />}
// </div>

// }

// const db = new Dexie("event_cards");

// const eventCardDb = (eventCard, table) => {
// 	const db = new Dexie(eventCard);
// 	db.version(1).stores(table);
// 	db.open();
// 	return db;
// 	/* const db = new Dexie(dbname,);
//   db.version(1).stores({
//     friends: `name,age`
//   });

//   db.open(); */
// };
// // db.version(1).stores({
// // 	items: "++id, title, startTime, endTime, location, introduce, creator",
// // },
// // db.open()

// // );

// // insert function
// const bulkcreate = (eventCard, data) => {
// 	let flag = empty(data);
// 	if (flag) {
// 		eventCard.bulkAdd(data);
// 		console.log("data inserted successfully");
// 	} else {
// 		console.log("please provide data..");
// 	}
// 	return flag;
// };

// const empty = (object) => {
// 	let flag = false;
// 	for (const value in object) {
// 		if (object[value] !== "" && object.hasOwnProperty(value)) {
// 			flag = true;
// 		} else {
// 			flag = false;
// 		}
// 	}
// 	return flag;
// };

// const getData = async (eventCard) => {
// 	let tableData = [];
// 	await eventCard.count(async (count) => {
// 		console.log("count is", count);
// 		if (count) {
// 			await dbtable.each((data) => {
// 				tableData = [data, ...tableData];
// 			});
// 		} else {
// 			return tableData;
// 		}
// 	});

// 	return tableData;
// 	// console.log('Get data finished', tableData);
// 	// return tableData;
// };
// /* selecting list items and update respectively  */
// const getSingleData = (dbtable, id) => {
// 	return dbtable.get(id);
// };

// const updateItemData = (dbtable, id, data) => {
// 	dbtable.update(id, data);
// };

// /* delete list itms and delete all */

// const deleteItem = (dbtable, id) => {
// 	console.log("delete called", id);
// 	dbtable.delete(id);
// };

// export default eventCardDb;
// export { bulkcreate, getData, getSingleData, updateItemData, deleteItem };
