import styled from "styled-components";
import { StyledBackLink } from "@/components/styles/BackLink";
import { useRouter } from "next/router";
import MuiCreateEventForm from "@/components/MuiCreateEventForm";

function CreateEventForm({ onHandleEntryData }) {
	// const router = useRouter();

	// function handleSubmit(event) {
	// 	event.preventDefault();
	// 	const formData = new FormData(event.target);
	// 	const data = Object.fromEntries(formData);

	// 	onHandleEntryData(data);

	// 	router.push(`/`);
	// }
	return (
		<>
			<StyledHeaderCreateEventPage>
				<StyledBackLink href="/">Home</StyledBackLink>
				<StyledLedegend>New Event</StyledLedegend>
			</StyledHeaderCreateEventPage>
			<div>
				<MuiCreateEventForm onHandleEntryData={onHandleEntryData} />
				{/* <StyledFormContainer id="createEventForm" onSubmit={handleSubmit}>
					<StyledFieldSet>
						<FormItems>
							<label htmlFor="title">Title:</label>
							<StyledInput
								id="title"
								name="title"
								type="text"
								maxLength="25"
								required
								autoFocus
							/>
							<label htmlFor="start-time">Start Time:</label>
							<StyledInput
								id="start-time"
								name="startTime"
								type="datetime-local"
							/>
							<label htmlFor="end-time">End Time:</label>
							<StyledInput id="end-time" name="endTime" type="datetime-local" />
							<label htmlFor="location">Location:</label>
							<StyledInput
								id="location"
								name="location"
								type="text"
								maxLength="30"
								required
							/>

							<label htmlFor="description">Let a Comment:</label>
							<StyledTextArea
								cols="30"
								id="description"
								name="description"
								type="text"
								maxLength="50"
							/>
							<label htmlFor="title">Creator:</label>
							<StyledInput
								id="creator"
								name="creator"
								type="text"
								maxLength="15"
								required
							/>
							<StyledSubmitButton type="submit">Submit</StyledSubmitButton>
						</FormItems>
					</StyledFieldSet>
				</StyledFormContainer> */}
			</div>
		</>
	);
}

const StyledCreatePageBody = styled.body``;

const StyledHeaderCreateEventPage = styled.header`
	display: flex;
	padding-top: 30px;
	padding-left: 10px;
`;

const StyledTextArea = styled.textarea`
	background: linear-gradient(21deg, #10abff, #1beabd);
	border-radius: 6px;
`;

const StyledLedegend = styled.legend`
	font-size: 50px;
	font-weight: 800px;
	color: #fdfdfe;
	text-shadow: 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,
		0px 0px 20px #b393d3;
`;

const StyledInput = styled.input`
	background: linear-gradient(21deg, #10abff, #1beabd);
	border-radius: 6px;
`;

const StyledFieldSet = styled.fieldset`
	border: none;
`;

const FormItems = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
	align-items: center;
	align-content: space-between;
`;

const StyledFormContainer = styled.form`
	display: flex;
	padding-top: 15px;
	border: 4px solid;
	border-radius: 20px;
	height: 80vh;
	margin-top: 10px;
	width: 70vw;
	margin-left: 50px;
	justify-content: center;
	background: rgb(36, 0, 26);
	background: linear-gradient(
		90deg,
		rgba(36, 0, 26, 1) 0%,
		rgba(9, 121, 71, 1) 35%,
		rgba(0, 212, 255, 1) 100%
	);
	box-shadow: 10px 5px 5px rgb(63, 94, 251);
	/* background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);; */
`;
export default CreateEventForm;
