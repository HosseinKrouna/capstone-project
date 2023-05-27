import { useRouter } from "next/router";
import styled from "styled-components";
import { StyledMain } from "@/components/styles/VotepageStyle";
import DetailsEventData from "@/components/DetailsEventData";
import { StyledBackLink } from "@/components/styles/BackLink";
import Image from "next/image";
import { optionIcons } from "@/Icons/optionIcon";

function DetailsPage({ allItems }) {
	const router = useRouter();
	const { id } = router.query;
	const currentEvent = allItems.find((item) => item.eventId === id);

	//TODO - Style Details Page

	function handelEdit() {
		router.push(`/editpage/${currentEvent?.eventId}`);
	}

	return (
		<>
			<span>
				<StyledMain>
					<StyledBackLink href={`/`}>
						<Image
							src={optionIcons[3].imageSrc}
							alt={optionIcons[3].description}
							width={40}
							height={50}
						/>
					</StyledBackLink>

					<StyledTitle>{currentEvent?.title}</StyledTitle>
					<DetailsEventData currentEvent={currentEvent} />

					<StyledEditImage
						onClick={handelEdit}
						src={optionIcons[5].imageSrc}
						alt={optionIcons[5].description}
						width={55}
						height={55}
					/>
				</StyledMain>
			</span>
		</>
	);
}

const StyledEditImage = styled(Image)`
	cursor: pointer;

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

const StyledTitle = styled.h1`
	color: white;
	font-size: 50px;
`;

export default DetailsPage;
