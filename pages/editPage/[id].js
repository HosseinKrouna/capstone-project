import MuiCreateEventForm from "@/components/MuiCreateEventForm";
import { StyledBackLink } from "@/components/styles/BackLink";
import { StyledCardContainer } from "@/components/styles/CardContainer";
import { useRouter } from "next/router";
import styled from "styled-components";
import { optionIcons } from "@/Icons/optionIcon";
import Image from "next/image";
import { db } from "@/components/Dexie";
import { useState } from "react";
import { TextField, Stack, FormControl, Paper } from "@mui/material";

function EditPage({ allItems }) {
	const router = useRouter();
	const { id } = router.query;
	const currentEvent = allItems.find((item) => item.eventId === id);

	function handleChanges(event) {
		const currentEventChanges = event.target.defaultValue;
	}

	function handleSubmitChanges(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);
		console.log(data);

		eventDetails
			.where("eventId")
			.equals(currentEvent.eventId)
			.modify((updateEvent) => {
				updateEvent.title = data.title;
				updateEvent.startTime = data.startTime;
				updateEvent.endTime = data.endTime;
				updateEvent.location = data.location;
				updateEvent.introduce = data.introduce;
				updateEvent.creator = data.creator;
			})
			.then(() => {
				console.log("Database successfully updated");
			})
			.catch((err) => {
				console.error(err + "Could not update database");
			})
			.finally(() => {
				router.push("/");
			});
	}

	const { eventDetails } = db;

	function handelDelete() {
		eventDetails
			.where("eventId")
			.equals(currentEvent.eventId)
			.delete()
			.then(() => {
				console.log("Database successfully deleted");
			})
			.catch((err) => {
				console.error(err + "Could not delete database");
			})
			.finally(() => {
				router.push("/");
			});
	}
	//TODO - Delete function should be modal dialog using

	return (
		<>
			<StyledBackLink href={"/"}>
				<Image
					src={optionIcons[3].imageSrc}
					alt={optionIcons[3].description}
					width={45}
					height={45}
				/>
			</StyledBackLink>

			<StyledTitel>Edit Event</StyledTitel>

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
							<form id="editForm" onSubmit={handleSubmitChanges}>
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
										defaultValue={currentEvent.title}
										onChange={handleChanges}
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
										onChange={handleChanges}
										defaultValue={currentEvent.startTime}
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
										onChange={handleChanges}
										defaultValue={currentEvent.endTime}
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
										onChange={handleChanges}
										defaultValue={currentEvent.location}
										id="location"
										name="location"
										sx={{ background: "#E8F6F6" }}
										label="Location"
										color="secondary"
										required
									/>
									<TextField
										onChange={handleChanges}
										defaultValue={currentEvent.introduce}
										id="introduce"
										name="introduce"
										sx={{ background: "#E8F6F6" }}
										label="Introduce"
										color="secondary"
										required
									/>
									<TextField
										onChange={handleChanges}
										defaultValue={currentEvent.creator}
										name="creator"
										id="creator"
										sx={{ background: "#E8F6F6" }}
										label="Creator"
										color="secondary"
										required
									/>
									<StyledConfirmButton type="submit">Done</StyledConfirmButton>
								</FormControl>
							</form>
						</Stack>
					</Stack>
				</Stack>
			</Paper>

			<StyledDeleteImage
				onClick={handelDelete}
				src={optionIcons[6].imageSrc}
				alt={optionIcons[6].description}
				width={100}
				height={100}
			/>
		</>
	);
}

const StyledConfirmButton = styled.button`
	align-self: center;
	cursor: pointer;
	margin-top: 13px;
	padding: 0.5rem 0.5rem;
	border-radius: 1.75rem;
	line-height: 1.5rem;
	font-size: 1.6rem;
	font-weight: 500;
	width: 207px;
	border: 1px solid #012880;
	background-image: linear-gradient(-180deg, #4cf439 0%, #25bc14 100%);
	box-shadow: 0 1rem 1.25rem 0 rgba(22, 75, 195, 0.5),
		0 -0.25rem 1.5rem black inset, 0 0.75rem 0.5rem black inset,
		0 0.25rem 0.5rem 0 black(180, 70, 207, 1) inset;
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

const StyledDeleteImage = styled(Image)`
	cursor: pointer;
`;

const StyledTitel = styled.h1`
	font-size: 35px;
	font-weight: 700;
	color: #fdfdfe;
	text-shadow: 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,
		0px 0px 20px #b393d3;
	padding: 2px;
`;

export default EditPage;
