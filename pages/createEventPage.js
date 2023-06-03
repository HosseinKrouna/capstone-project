"use client";

import MuiCreateEventForm from "@/components/MuiCreateEventForm";
import { StyledBackLink } from "@/components/styles/BackLink";
import { Paper, Stack, Grid, Item } from "@mui/material";
import styled from "styled-components";
import Image from "next/image";
import { optionIcons } from "@/Icons/optionIcon";
import { TextField } from "@mui/icons-material";
import { useState } from "react";
import { defaultPictures } from "@/assets/images/defaultPictures";

function CreateEventForm({ onHandleEntryData }) {
	// const { idPicture, url, alt } = defaultPictures[0];

	const [images, setImages] = useState([
		{
			id: defaultPictures[0].idPicture,
			url: defaultPictures[0].url,
			width: 150,
			height: 150,
			alt: defaultPictures[0].alt,
		},
	]);

	async function handleuploadSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const response = await fetch("/api/upload", {
			method: "post",
			body: formData,
		});
		const data = await response.json();

		const newImage = {
			id: data.public_id,
			url: data.secure_url,
			width: 150,
			height: 150,
			alt: "",
		};
		setImages([newImage]);
	}

	//TODO - setup Cloudenary for imag uploader
	return (
		<>
			<Stack justifyContent="center" alignItems="center">
				<Stack direction="row">
					<StyledBackLink href="/">
						<Image
							src={optionIcons[3].imageSrc}
							alt={optionIcons[3].description}
							height={45}
							width={45}
						/>
					</StyledBackLink>
					<StyledCreateEventPageTitle>
						Create New Event
					</StyledCreateEventPageTitle>
				</Stack>
				{
					<AppImageContainer>
						<ImagesContainer>
							{images.map(({ id, url, width, height }) => (
								<li key={id}>
									<StyledImage
										src={url}
										width={width}
										height={height}
										alt="uploaded image"
									/>
								</li>
							))}
						</ImagesContainer>

						<form action="" onSubmit={handleuploadSubmit}>
							<input
								type="file"
								size="small"
								name="imageFile"
								sx={{
									mt: "22px",
									background: "#E8F6F6",
								}}
								label="File"
								color="secondary"
							/>
							<button type="submit">Upload</button>
						</form>
					</AppImageContainer>
				}
				<MuiCreateEventForm onHandleEntryData={onHandleEntryData} />
			</Stack>
		</>
	);
}

const AppImageContainer = styled.span`
	display: grid;
	min-height: 30vh;
	place-items: center;
	place-content: center;
	gap: 50px;
`;

const ImagesContainer = styled.ul`
	list-style: none;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const StyledImage = styled(Image)`
	object-fit: cover;
	border-radius: 14px;
	overflow: hidden;
`;

const StyledCreateEventPageTitle = styled.h2`
	font-size: 35px;
	font-weight: 700;
	color: #fdfdfe;
	text-shadow: 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,
		0px 0px 20px #b393d3;
	padding: 2px;
`;

export default CreateEventForm;
