import { TextField, Stack, FormControl, Paper } from "@mui/material";
import { StyledSubmitButton } from "./styles/SubmitButton";
import { useRouter } from "next/router";

function MuiCreateEventForm({ onHandleEntryData }) {
	const router = useRouter();

	async function handleSubmit(event) {
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
						<form id="createEventForm" on onSubmit={handleSubmit}>
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
								/>
								<TextField
									id="location"
									name="location"
									sx={{ background: "#E8F6F6" }}
									label="Location"
									color="secondary"
									required
								/>
								<TextField
									id="introduce"
									name="introduce"
									sx={{ background: "#E8F6F6" }}
									label="Introduce"
									color="secondary"
									required
								/>
								<TextField
									name="creator"
									id="creator"
									sx={{ background: "#E8F6F6" }}
									label="Creator"
									color="secondary"
									required
								/>
								<StyledSubmitButton type="submit">Submit</StyledSubmitButton>
							</FormControl>
						</form>
					</Stack>
				</Stack>
			</Stack>
		</Paper>
	);
}

export default MuiCreateEventForm;
