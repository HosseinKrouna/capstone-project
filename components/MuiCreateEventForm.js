import { TextField, Stack, FormControl, Paper } from "@mui/material";
import { StyledSubmitButton } from "./styles/SubmitButton";
import { useRouter } from "next/router";

function MuiCreateEventForm({ onHandleEntryData }) {
	const router = useRouter();

	//-------------------------------------------------------------------------------------------------------------
	// const [eventData, setEventData] = useState({
	// 	title: "",
	// 	startTime: "",
	// 	endTime: "",
	// 	location: "",
	// 	introduce: "",
	// 	creator: "",
	// });

	// useEffect(
	// 	() => {
	// 		// create the store

	// 		db.version(1).stores({ formData: "id,value" });

	// 		// perform a read/write transatiction on the new store
	// 		db.transaction("rw", db.formData, async () => {
	// 			// get the first and last name from the data
	// 			const dbTitle = await db.formData.get("title");
	// 			const dbStartTime = await db.formData.get("startTime");
	// 			const dbEndTime = await db.formData.get("endTime");
	// 			const dbLocation = await db.formData.get("location");
	// 			const dbIntroduce = await db.formData.get("introduce");
	// 			const dbCreator = await db.formData.get("creator");

	// 			// if the first or last name fields have not be added, add them
	// 			if (!dbTitle) await db.formData.add({ id: "title", value: "" });
	// 			if (!dbStartTime) await db.formData.add({ id: "startTime", value: "" });
	// 			if (!dbEndTime) await db.formData.add({ id: "endTime", value: "" });
	// 			if (!dbLocation) await db.formData.add({ id: "location", value: "" });
	// 			if (!dbIntroduce) await db.formData.add({ id: "introduce", value: "" });
	// 			if (!dbCreator) await db.formData.add({ id: "creator", value: "" });

	// 			// set the initial values
	// 			setEventData({
	// 				title: dbTitle ? dbTitle.value : "",
	// 				startTime: dbStartTime ? dbStartTime.value : "",
	// 				endTime: dbEndTime ? dbEndTime.value : "",
	// 				location: dbLocation ? dbLocation.value : "",
	// 				introduce: dbIntroduce ? dbIntroduce.value : "",
	// 				creator: dbCreator ? dbCreator.value : "",
	// 			});
	// 		}).catch((e) => {
	// 			// log any errors
	// 			console.log(e.stack || e);
	// 		});

	// 		// close the database connection if form is unmounted or the
	// 		// database connection changes
	// 		return () => db.close();
	// 	},
	// 	// run effect whenever the database connection changes
	// 	[db]
	// );

	// // sets the name in the store and in the state hook
	// const setEvent = (id) => (value) => {
	// 	// update the store
	// 	db.formData.put({ id, value });
	// 	// update the state hook
	// 	setEventData((prevEventData) => ({ ...prevEventData, [id]: value }));
	// };

	// const handleSetEvent = (id) => (e) => setEvent(id)(e.target.value);

	// when the form is submitted, prevent the default action
	// which reloads the page and reset the first and last name
	// in both the store and in the state hook
	//-------------------------------------------------------------------------------------------------------------

	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);
		onHandleEntryData(data);

		router.push(`/`);
	}

	return (
		<Paper sx={{ backgroundColor: "transparent" }}>
			<Stack justifyContent="center" alignItems="center">
				<Stack
					sx={{
						border: "4px solid",
						width: "92vw",
						height: "85vh",
						background: "linear-gradient(21deg, #10abff, #1beabd)",
						borderRadius: "21px",
					}}
				>
					<Stack
						spacing={5}
						direction="column"
						justifyContent="flex-start"
						alignItems="center"
					>
						<form id="createEventForm" onSubmit={handleSubmit}>
							<FormControl
								required
								size="large"
								variant="outlined"
								sx={{
									gap: "25px",
									width: "360px",
								}}
							>
								<TextField
									id="title"
									name="title"
									sx={{
										mt: "22px",
										background: "#E8F6F6",
									}}
									label="Title"
									color="secondary"
									required
									value={eventData.title}
									onChange={handleSetEvent("title")}
								/>
								<TextField
									InputLabelProps={{
										shrink: true,
									}}
									type="datetime-local"
									label="StartTime"
									id="startTime"
									name="startTime"
									sx={{
										background: "#E8F6F6",
									}}
									value={eventData.startTime}
									onChange={handleSetEvent("startTime")}
								/>
								<TextField
									InputLabelProps={{
										shrink: true,
									}}
									type="datetime-local"
									label="EndTime"
									id="endTime"
									name="endTime"
									sx={{
										background: "#E8F6F6",
									}}
									value={eventData.endTime}
									onChange={handleSetEvent("endTime")}
								/>
								<TextField
									id="location"
									name="location"
									sx={{ background: "#E8F6F6" }}
									label="Location"
									color="secondary"
									required
									value={eventData.location}
									onChange={handleSetEvent("location")}
								/>
								<TextField
									id="introduce"
									name="introduce"
									sx={{ background: "#E8F6F6" }}
									label="Introduce"
									color="secondary"
									required
									value={eventData.introduce}
									onChange={handleSetEvent("introduce")}
								/>
								<TextField
									name="creator"
									id="creator"
									sx={{ background: "#E8F6F6" }}
									label="Creator"
									color="secondary"
									required
									value={eventData.creator}
									onChange={handleSetEvent("creator")}
								/>
								{/* <Online> */}
								<StyledSubmitButton type="Submit">Submit</StyledSubmitButton>
								{/* </Online> */}
								{/* <Offline>You are currently offline!</Offline> */}
							</FormControl>
						</form>
					</Stack>
				</Stack>
			</Stack>
		</Paper>
	);
}

export default MuiCreateEventForm;
