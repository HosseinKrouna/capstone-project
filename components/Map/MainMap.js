import { MapContainer as LeafletMap, Marker, Popup } from "react-leaflet";
import styled from "styled-components";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import LocationMarker from "./LocationMarker";
import { Stack, Button } from "@mui/material";
import CustomTileLayer from "./CustomTileLayer";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SearchBarMap from "./SearchBarMap";

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

const blueIcon = new L.Icon({
	iconUrl: "/assets/mapIcons/blue_marker.png",

	shadowUrl:
		"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
	iconSize: [45, 51],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

export default function MainMap({ markers }) {
	//
	const [selectedMarker, setSelectedMarker] = useState(null);
	const [returnCurrentPosition, setReturnCurrentPosition] = useState();
	function handleReturnCurrentPosition() {
		const newCurrentPositionId = uuidv4();
		setReturnCurrentPosition(newCurrentPositionId);
	}

	const LocationMarkerComponent = returnCurrentPosition ? (
		<LocationMarker key={returnCurrentPosition} />
	) : (
		<LocationMarker />
	);

	function handleSetMarker(selectedAddress) {
		setSelectedMarker(selectedAddress);
	}

	function renderSearchMarkerComponent() {
		if (selectedMarker) {
			const { lat, lon, address } = selectedMarker;
			const position = L.latLng(lat, lon);
			return (
				<Marker position={position} icon={blueIcon}>
					<Popup>
						<h2>{address}</h2>
						<p>Seleced position</p>
					</Popup>
				</Marker>
			);
		} else {
			return null;
		}
	}

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
				{renderSearchMarkerComponent()}
				{LocationMarkerComponent}
			</StyledMapContainer>
			<SearchBarMap renderMarkers={handleSetMarker} />
			<Button onClick={handleReturnCurrentPosition}>
				Return current position
			</Button>
		</Stack>
	);
}

const StyledMapContainer = styled(LeafletMap)`
	height: 30rem;
	width: 50rem;
	margin: 0 auto;
`;
