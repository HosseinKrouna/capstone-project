import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { Stack } from "@mui/material";

const DynamicMap = dynamic(() => import("../components/Map/MainMap"), {
	ssr: false,
});

const markers = [
	{
		id: uuidv4(),
		name: "Platja de la Malva-rosa",
		lat: 39.476,
		long: -0.323,
	},
	{
		id: uuidv4(),
		name: "Oveja Verde Valencia",
		lat: 39.472,
		long: -0.352,
	},
];

function locationpage() {
	return (
		<Stack>
			<StyledLocationPageTitle> Where should it be?</StyledLocationPageTitle>
			<DynamicMap markers={markers} />
		</Stack>
	);
}

const StyledLocationPageTitle = styled.h1`
	align-self: center;
	font-size: 35px;
	font-weight: 700;
	color: #fdfdfe;
	text-shadow: 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,
		0px 0px 20px #b393d3;
	padding: 3px;
`;

export default locationpage;
