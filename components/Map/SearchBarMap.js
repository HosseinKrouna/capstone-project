import { useState, useEffect } from "react";
import { MainContainer as LeafletMap } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import CustomTileLayer from "./CustomTileLayer";
import { Stack } from "@mui/material";

function SearchBarMap({ onHandleSearch }) {
	const [address, setAddress] = useState("");
	const [map, setMap] = useState(null);

	useEffect(() => {
		if (map) {
			const searchControl = new GeoSearchControl({
				provider: new OpenStreetMapProvider(),
				style: "bar",
			});

			map.addControl(searchControl);
		}
	}, [map]);

	function handleInputChange(event) {
		setAddress(event.target.value);
		console.log("address ", address);
	}

	function handleSubmit(event) {
		event.preventDefault();
		onHandleSearch(address);
	}

	return (
		<Stack>
			<LeafletMap
				center={[51.505, -0.09]}
				zoom={13}
				style={{ height: "400px", width: "100%" }}
				whenCreated={setMap}
			>
				<CustomTileLayer />
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={address}
						onChange={handleInputChange}
						placeholder="Enter address"
					/>
					<button type="submit">Search</button>
				</form>
			</LeafletMap>
		</Stack>
	);
}

export default SearchBarMap;
