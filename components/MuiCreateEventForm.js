import { TextField, Stack, FormControl } from "@mui/material";
import {
	LocalizationProvider,
	MobileDateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StyledSubmitButton } from "./styles/SubmitButton";
import styled from "styled-components";
import { StyledBackLink } from "@/components/styles/BackLink";
import { useRouter } from "next/router";

function MuiCreateEventForm({ onHandleEntryData }) {
	const router = useRouter();

	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);
		console.log(data);
		onHandleEntryData(data);

		router.push(`/`);
	}
	return (
		<>
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
						// sx={{ alignSelf: "center" }}
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
								/>
								<LocalizationProvider dateAdapter={AdapterDayjs}>
									<MobileDateTimePicker
										id="startTime"
										name="startTime"
										sx={{
											background: "#E8F6F6",
										}}
									/>
									<MobileDateTimePicker
										id="endTime"
										name="endTime"
										sx={{
											background: "#E8F6F6",
										}}
									/>
								</LocalizationProvider>
								<TextField
									id="location"
									name="location"
									sx={{ background: "#E8F6F6" }}
									label="Location"
									color="secondary"
									required
								/>
								<TextField
									id="commit"
									name="commit"
									sx={{ background: "#E8F6F6" }}
									label="Commit"
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
								<StyledSubmitButton type="Submit">Submit</StyledSubmitButton>
							</FormControl>
						</form>
					</Stack>
				</Stack>
			</Stack>
		</>
	);
}

export default MuiCreateEventForm;
