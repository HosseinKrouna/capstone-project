import {
	StyledCardContainer,
	StyledEndTime,
	StyledEventTitle,
	StyledLocation,
	StyledStartTime,
	StyledVoteResult,
	StyledFromText,
	StyledToText,
	StyledWhereText,
} from "./styles/CardContainer";
import Image from "next/image";
import { voteIcons } from "@/Icons/dataIcons";
import { optionIcons } from "@/Icons/optionIcon";
import styled from "styled-components";
import Link from "next/link";

export default function EventCardData({ item }) {
	//TODO -
	// fix: sign limits
	console.log("====> item: ", item);

	const {
		creator,
		startTime,
		endTime,
		eventId,
		introduce,
		location,
		title,
		voteResult,
	} = item ?? {};
	return (
		<StyledCardContainer>
			<StyledEventTitle>{title}</StyledEventTitle>

			<StyledFromText>From: </StyledFromText>
			<StyledToText>To: </StyledToText>
			<StyledWhereText>Where? </StyledWhereText>
			<StyledStartTime>{startTime}</StyledStartTime>

			<StyledEndTime>{endTime}</StyledEndTime>
			<StyledLocation>{location}</StyledLocation>
			<StyledVoteResult>
				{!voteResult ? (
					// <StyledLink href={`/votepage/${item.eventId}`}>
					<Image
						src={optionIcons[4].imageSrc}
						alt={optionIcons[4].description}
						width={30}
						height={30}
					/>
				) : (
					// </StyledLink>
					<p>Your Vote: </p>
				)}
				{!voteResult ? null : (
					<Image
						src={voteIcons[voteResult].imageSrc}
						alt={voteIcons[voteResult].description}
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
