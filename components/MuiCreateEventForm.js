import { TextField, Stack } from "@mui/material";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDateTimePicker } from "@mui/x-date-pickers";

function MuiCreateEventForm() {
	const [formValue, setformValue] = useState("");

	return (
		<>
			<Stack spacing={3}>
				<TextField
					label="Title"
					variant="outlined"
					color="secondary"
					size="large"
					required
					formValue={formValue}
					onChange={(inputValue) => setformValue(inputValue.target.value)}
					error={!formValue}
				/>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<MobileDateTimePicker />
					<MobileDateTimePicker />
				</LocalizationProvider>
				<TextField
					label="Location"
					variant="outlined"
					color="secondary"
					size="large"
					required
					formValue={formValue}
					onChange={(inputValue) => setformValue(inputValue.target.value)}
					error={!formValue}
				/>
				<TextField
					label="Commit"
					variant="outlined"
					color="secondary"
					size="large"
					required
					formValue={formValue}
					onChange={(inputValue) => setformValue(inputValue.target.value)}
					error={!formValue}
				/>
				<TextField
					label="Creator"
					variant="outlined"
					color="secondary"
					size="large"
					required
					formValue={formValue}
					onChange={(inputValue) => setformValue(inputValue.target.value)}
					error={!formValue}
				/>
			</Stack>
		</>
	);
}

export default MuiCreateEventForm;
