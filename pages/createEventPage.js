import styled from "styled-components";
import { StyledBackLink } from "@/components/styles/BackLink";
import { useRouter } from "next/router";

function CreateEventForm({ onHandleEntryData, onHandleConfettiExplosion }) {
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
			<StyledLedegend>New Event</StyledLedegend>
			<main>
				<FormContainer id="createEventForm" onSubmit={handleSubmit}>
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
				</FormContainer>
				<StyledBackLink href="/">Home</StyledBackLink>
			</main>
		</>
	);
}

const StyledTextArea = styled.textarea`
	background: linear-gradient(21deg, #10abff, #1beabd);
	border-radius: 6px;
`;

const StyledLedegend = styled.legend`
	font-size: 37px;
	font-weight: 800px;
	color: #fdfdfe;
	text-shadow: 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,
		0px 0px 20px #b393d3;
	padding-left: 52px;
	padding-top: 14px;
`;

const StyledSubmitButton = styled.button`
	cursor: pointer;
	position: relative;
	margin-top: 20px;
	padding: 0.5rem 0.5rem;
	border-radius: 1.75rem;
	line-height: 1.5rem;
	font-size: 1.6rem;
	font-weight: 500;
	width: 207px;
	border: 1px solid #012880;
	background-image: linear-gradient(-180deg, #ff89d6 0%, #c01f9e 100%);
	box-shadow: 0 1rem 1.25rem 0 rgba(22, 75, 195, 0.5),
		0 -0.25rem 1.5rem rgba(110, 15, 155, 1) inset,
		0 0.75rem 0.5rem rgba(255, 255, 255, 0.4) inset,
		0 0.25rem 0.5rem 0 rgba(180, 70, 207, 1) inset;
	transform-style: preserve-3d;
	transition: all 175ms cubic-bezier(0, 0, 1, 1);
	&::before {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: inherit;
		transform: translate3d(0, 0.75em, -1em);
		transition: all 175ms cubic-bezier(0, 0, 1, 1);
	}
	&:hover {
		transform: translate(0, 0.375em);
	}
	&:hover::before {
		transform: translate3d(0, 0.75em, -1em);
	}
	&:active {
		transform: translate(0em, 0.75em);
	}
	&:active::before {
		transform: translate3d(0, 0, -1em);
	}
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

const FormContainer = styled.form`
	padding: 10px;
	/* height: 100vh; */
`;
export default CreateEventForm;
