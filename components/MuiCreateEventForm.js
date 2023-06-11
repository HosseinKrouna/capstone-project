import { TextField, Stack, FormControl, Paper } from "@mui/material";
import { StyledSubmitButton } from "./styles/SubmitButton";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { defaultPictures } from "@/assets/images/defaultPictures";
import styled from "styled-components";
import Image from "next/image";

function MuiCreateEventForm({ onHandleFormUploadSubmit, onHandleEntryData }) {
	const router = useRouter();
	const { idPicture, url, alt } = defaultPictures[0];
	const [images, setImages] = useState([
		{
			id: idPicture,
			url: url,
			alt: alt,
		},
	]);
	async function handleUploadSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const response = await fetch("/api/upload", {
			method: "post",
			body: formData,
		});

		const data = await response.json();
		const { public_id, secure_url } = data;

		const newImage = {
			id: public_id,
			url: secure_url,
			alt: "new image",
		};

		setImages([newImage]);

		onHandleFormUploadSubmit(data);
	}

	function handleSubmit(event) {
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData);

		const dataFromHandleSubmit = {
			...data,
			eventId: uuidv4(),
			images: images,
		};

		onHandleEntryData(dataFromHandleSubmit);

		router.push(`/`);
	}

	const handleClickOpenMap = () => {
		router.push("/locationpage");
	};

	return (
		<>
			<AppImageContainer>
				<ImageContainer>
					{images.map(({ id, url }) => (
						<li key={id}>
							<StyledImage
								src={url}
								width={150}
								height={150}
								alt="uploaded image"
							/>
						</li>
					))}
				</ImageContainer>
			</AppImageContainer>

			<Paper sx={{ backgroundColor: "transparent" }}>
				<Stack justifyContent="center" alignItems="center">
					<Stack
						sx={{
							border: "4px solid",
							width: "92vw",
							height: "75vh",
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
							<form action="" onSubmit={handleUploadSubmit}>
								<input type="file" name="imageFile" />
								<button type="submit">Upload</button>
							</form>
							<form id="createEventForm" onSubmit={handleSubmit}>
								<FormControl
									required
									variant="outlined"
									sx={{
										gap: "25px",
										width: 300,
									}}
								>
									<TextField
										size="small"
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
										size="small"
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
										size="small"
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
										size="small"
										id="location"
										name="location"
										sx={{ background: "#E8F6F6" }}
										label="Location"
										color="secondary"
										required
										onClick={handleClickOpenMap}
									/>
									<TextField
										size="small"
										id="introduce"
										name="introduce"
										sx={{ background: "#E8F6F6" }}
										label="Introduce"
										color="secondary"
										required
									/>
									<TextField
										size="small"
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
		</>
	);
}

const StyledImage = styled(Image)`
	object-fit: cover;
	border-radius: 14px;
	overflow: hidden;
	box-shadow: limegreen;
`;
const AppImageContainer = styled.span`
	display: grid;
	min-height: 30vh;
	place-items: center;
	place-content: center;
`;

const ImageContainer = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;
export default MuiCreateEventForm;
