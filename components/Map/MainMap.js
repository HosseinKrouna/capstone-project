import { MapContainer as LeafletMap, Marker, Popup } from "react-leaflet";
import styled from "styled-components";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import LocationMarker from "./LocationMarker";
import { Stack } from "@mui/material";
// import SearchBarMap from "./SearchBarMap";
import CustomTileLayer from "./CustomTileLayer";

const goldIcon = new L.Icon({
	iconUrl:
		"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
	shadowUrl:
		"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

export default function MainMap({ markers }) {
	//
	// function handleSearch(address) {
	// 	console.log("Search address:", address);
	// }

	return (
		<Stack>
			<StyledMapContainer center={[50.123, 8.234]} zoom={12} scrollWheelZoom>
				<CustomTileLayer />
				{markers.map((marker) => {
					return (
						<Marker
							key={marker.id}
							position={[marker.lat, marker.long]}
							icon={goldIcon}
						>
							<Popup>
								<h2>{marker.name}</h2>
								<p>This is a very interesting spot</p>
							</Popup>
						</Marker>
					);
				})}
				{/* <Marker position={[50.123, 8.234]} icon={goldIcon}>
					<Popup>
						<h2>Search Current Marker</h2>
						<p>This is a very interesting spot</p>
					</Popup>
				</Marker> */}
				<LocationMarker />
				{/* <SearchBarMap onHandleSearch={handleSearch} /> */}
			</StyledMapContainer>
		</Stack>
	);
}

const StyledMapContainer = styled(LeafletMap)`
	height: 30rem;
	width: 50rem;
	margin: 0 auto;
`;
