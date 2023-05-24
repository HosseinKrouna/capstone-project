import {
	StyledCardContainer,
	StyledEndTime,
	StyledEventTitle,
	StyledLocation,
	StyledStartTime,
	StyledVoteResult,
	StyledOptionImage,
	StyledFromText,
	StyledToText,
	StyledWhereText,
} from "./styles/CardContainer";
import Image from "next/image";
import { voteIcons } from "@/Icons/dataIcons";
import { optionIcons } from "@/Icons/optionIcon";
import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

export default function EventCardData({ item }) {
	const router = useRouter();
	// const { id } = router.query;
	// const currentEvent = allItems.find((voteEvent) => voteEvent.eventId === id);

	function handleEdit() {
		router.push(`/editpage/${item.eventId}`);
	}

	//TODO -
	// - modify: voteLink for all voteResults to vote again
	// fix: delete optionIcon - is actual not used
	// fix: Grid-Styles and sign limits
	return (
		<StyledCardContainer>
			<Image
				onClick={handleEdit}
				src={optionIcons[0].imageSrc}
				alt={optionIcons[0].description}
				width={30}
				height={30}
			/>
			<StyledEventTitle>{item.title}</StyledEventTitle>

			<StyledFromText>From: </StyledFromText>
			<StyledToText>To: </StyledToText>
			<StyledWhereText>Where? </StyledWhereText>
			<StyledStartTime>{item.startTime}</StyledStartTime>

			<StyledEndTime>{item.endTime}</StyledEndTime>
			<StyledLocation>{item.location}</StyledLocation>
			<StyledVoteResult>
				{!item.voteResult ? (
					<StyledLink href={`/votepage/${item.eventId}`}>
						<Image
							src={optionIcons[4].imageSrc}
							alt={optionIcons[4].description}
							width={30}
							height={30}
						/>
					</StyledLink>
				) : (
					"Your Vote: "
				)}
				{!item.voteResult ? null : (
					<Image
						src={voteIcons[item.voteResult].imageSrc}
						alt={voteIcons[item.voteResult].description}
						width={30}
						height={30}
					/>
				)}
			</StyledVoteResult>
		</StyledCardContainer>
	);
}

const StyledLink = styled(Link)`
	text-decoration: none;
	color: black;
	font-weight: 600;
	cursor: pointer;
	width: 300px;
	height: 200px;
	overflow: hidden;
`;
