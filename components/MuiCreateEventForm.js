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
									sx={{
										background: "#E8F6F6",
									}}
								/>
								<MobileDateTimePicker
									sx={{
										background: "#E8F6F6",
									}}
								/>
							</LocalizationProvider>
							<TextField
								sx={{ background: "#E8F6F6" }}
								label="Location"
								color="secondary"
								required
							/>
							<TextField
								sx={{ background: "#E8F6F6" }}
								label="Commit"
								color="secondary"
								required
							/>
							<TextField
								sx={{ background: "#E8F6F6" }}
								label="Creator"
								color="secondary"
								required
							/>
							<StyledSubmitButton type="Submit" onClick={handleSubmit}>
								Submit
							</StyledSubmitButton>
						</FormControl>
					</Stack>
				</Stack>
			</Stack>
		</>
	);
}

export default MuiCreateEventForm;
