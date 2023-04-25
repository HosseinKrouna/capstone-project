import {
	StyledCardContainer,
	StyledEndTime,
	StyledEventTitle,
	StyledLocation,
	StyledStartTime,
	StyledVoteResult,
} from "./styles/CardContainer";
import styled from "styled-components";
import ModalDelete from "./ModalDelete";
import Image from "next/image";
import { optionIcon } from "@/Icons/optionIcon";
import "@fontsource/roboto/300.css";

export default function EventCard({ entry, showModalDelete }) {
	function handleDeleteCard() {
		console.log(showModalDelete);
		return <ModalDelete show={showModalDelete} />;
	}
	return (
		<>
			<StyledModalDelete>
				<Image
					onClick={handleDeleteCard}
					src={optionIcon[0].imageSrc}
					alt="Option Image"
					width={30}
					height={30}
				/>
			</StyledModalDelete>
			<StyledCardContainer>
				<StyledEventTitle>{entry.title}</StyledEventTitle>
				<StyledStartTime>{entry.startTime}</StyledStartTime>
				<StyledEndTime>{entry.endTime}</StyledEndTime>
				<StyledLocation>{entry.location}</StyledLocation>
				<StyledVoteResult>{entry.voteResult}</StyledVoteResult>
			</StyledCardContainer>
		</>
	);
}

const StyledModalDelete = styled.div`
	:hover {
		background-color: red;
	}
`;
