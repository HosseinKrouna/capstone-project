import EventsList from "../components/EventsList";
import {
	StyledHeaderHomepage,
	StyledAppTitle,
} from "../components/styles/Homepage";
import { StyledAddEventLink } from "../components/styles/AddEventLink";
import styled from "styled-components";
import Head from "next/head";
import { Animated } from "react-animated-css";
import Image from "next/image";
import { optionIcons } from "@/Icons/optionIcon";
import { Typography, Stack } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
export default function Homepage({
	entryData,
	voteResultData,
	onHandelDeleteEntry,
}) {
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
				/>
			</Head>
			<StyledHeaderHomepage>
				<Animated animationIn="flash" animationOut="fadeOut" isVisible={true}>
					<StyledAppTitle>Friends Wall</StyledAppTitle>
				</Animated>
			</StyledHeaderHomepage>
			<EventsList
				entryData={entryData}
				voteResultData={voteResultData}
				onHandelDeleteEntry={onHandelDeleteEntry}
			/>
			<StyledAddEventLink href="/createEventPage">
				<Image
					src={optionIcons[1].imageSrc}
					alt="Plus-Icon for create new event "
					width={70}
					height={70}
				/>
			</StyledAddEventLink>
		</>
	);
}

// const StyledMain = styled.main`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	gap: 11px;
// `;
