import { useRouter } from "next/router";
import { useState } from "react";
import { StyledBackLink } from "@/components/styles/BackLink";
import VoteDetails from "@/components/VoteDetails";
import { voteIcons } from "@/Icons/dataIcons/";
import Image from "next/image";
import {
	StyledEmojiCheckmark,
	StyledVoteTitle,
	StyledButtonConfirm,
	StyledVoteEventCard,
	StyledMain,
	StyledVoteButtons,
	StyledVoteButtonContainer,
} from "@/components/styles/VotepageStyle";
import { db } from "@/components/Dexie";
import Dexie from "dexie";

const { eventDetails } = db;

function Votepage({
	allItems,
	onHandleCurrentVoteElement,
	onHandleUpdateVoteEvent,
}) {
	const [voteCheckmarkImage, setVoteCheckmarkImage] = useState();

	console.log("voteCheckmarkImage => ", voteCheckmarkImage);

	const router = useRouter();
	const { id } = router.query;
	const currentEvent = allItems.find((voteEvent) => voteEvent.eventId === id);

	console.log("currentEvent ==> ", currentEvent);

	function handleVoteResult() {
		// const voteResultId = allItems.find(
		// 	(voteImage) => voteImage.eventId === allItems.eventId
		// );
		// console.log(voteResultId);
		// const voteIconSymbolElementAlt = voteCheckmarkImage.props.alt;
		// console.log("voteIconSymbolElementAlt =====> ", voteIconSymbolElementAlt);
		//---------------------------------------------------------------------------------------------
		const currentVoteIcon = voteIcons?.find(
			(voteIcon) => voteIcon.description === voteCheckmarkImage?.props.alt
		);
		onHandleCurrentVoteElement(currentVoteIcon);

		console.log("currentVoteIcon =======>", currentVoteIcon);
		//.map((voteicon) => voteicon.imageSrc);
		// const currentVoteIconImageSrc = currentVoteIcon.imageSrc;
		// console.log("currentVoteIconImageSrc =======>", currentVoteIconImageSrc);
		eventDetails
			.where("eventId")
			.equals(currentEvent.eventId)
			.modify((voteEvent) => {
				voteEvent.voteResult = currentVoteIcon?.id;
			});
		// console.log("eventDetails ======> ", eventDetails);
		// console.log("currentEvent =======>", currentEvent);
		// 	.catch(Dexie.ModifyError, (error) => {
		// 		console.error(error.failures.length + " items failed to modify");
		// 	})
		// 	.catch((error) => {
		// 		console.log("Generic error: " + error);
		// 	});
	}
	//---------------------------------------------------------------------------------------------

	// const currentVote = voteIcons.find(
	// 	(voteIcon) => voteIcon.imageSrc === voteCheckmarkImage.imageSrc
	// );

	// 	await eventDetails
	// 		.toCollection()
	// 		.modify({ voteResult: voteCheckmarkImage });
	// }
	// console.log("currentVote =============>" + currentVote);
	// setVoteResult(voteCheckmarkImage);
	// db.eventDetails.modify(function (value) {
	// 	this.value = new Vote({ voteResult: voteResult });
	// });
	// 	db.eventDetails.version(2).stores({
	// 		voteResult: 'voteResult',
	// }).upgrade(tx => {
	// 		return tx.table("eventDetails").toCollection().modify(voteStatus => {
	// 				const names = friend.name.split(' ');
	//  				friend.firstName = names.shift();
	//  				friend.lastName = names.join(' ');
	//  				delete friend.name;
	//  		});
	//  });

	//  	try {
	//  		await db.eventDetails.add({
	//  			voteResult: voteCheckmarkImage
	//  		})
	//  	}
	//  } catch (error) {
	//  	alert(`Error: ${error}`);
	//  };

	//  const resultVoteEvent = {
	//  	...currentEvent,
	//  	voteResult: voteCheckmarkImage,
	//  };
	//  console.log("======>" + resultVoteEvent);
	//  onHandleUpdateVoteEvent(resultVoteEvent);
	//  }

	return (
		<>
			<StyledMain>
				<StyledBackLink href="/">Home</StyledBackLink>

				<StyledVoteTitle>Voting</StyledVoteTitle>
				<StyledVoteEventCard>
					<VoteDetails currentEvent={currentEvent} />

					<StyledEmojiCheckmark>{voteCheckmarkImage}</StyledEmojiCheckmark>
				</StyledVoteEventCard>

				<StyledVoteButtonContainer>
					{voteIcons.map((voteIcon) => (
						<StyledVoteButtons
							key={voteIcon.id}
							onClick={() =>
								setVoteCheckmarkImage(
									<Image
										width={50}
										height={50}
										src={voteIcon.imageSrc}
										alt={voteIcon.description}
									/>
								)
							}
						>
							<Image
								width={80}
								height={80}
								src={voteIcon.imageSrc}
								alt={voteIcon.description}
							/>
						</StyledVoteButtons>
					))}
				</StyledVoteButtonContainer>

				<StyledButtonConfirm
					type="button"
					// value={voteCheckmarkImage}
					onClick={handleVoteResult}
				>
					Confirm
				</StyledButtonConfirm>
			</StyledMain>
		</>
	);
}

export default Votepage;
