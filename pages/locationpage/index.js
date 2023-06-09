import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

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
		<>
			<h1>locationpage</h1>
			<Map markers={markers} />
		</>
	);
}

export default locationpage;
