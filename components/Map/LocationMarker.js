import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import * as L from "leaflet";
const { Marker, Popup, useMapEvents } = require("react-leaflet");

const greenIcon = new L.Icon({
	iconUrl: "/assets/mapIcons/green_marker.png",

	shadowUrl:
		"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
	iconSize: [45, 51],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

export default function LocationMarker() {
	const [position, setPosition] = useState(null);
	const map = useMapEvents({
		locationfound: (e) => {
			setPosition(e.latlng);
			map.flyTo(e.latlng, map.getZoom());
		},
	});

	useEffect(() => {
		map.locate();
	}, [map]);

	return (
		position && (
			<Marker position={position} icon={greenIcon}>
				<Popup>You are here</Popup>
			</Marker>
		)
	);
}
