import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function SearchBarMap({ renderMarker }) {
	const [address, setAddress] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const [selectedAddress, setSelectedAddress] = useState(null);

	async function handleChange(event) {
		const query = event.target.value;
		setAddress(query);
		console.log(query);

		if (query) {
			await searchAddress(query);
		} else {
			setSearchResults([]);
		}
	}

	async function handleSubmit(event) {
		event.preventDefault();
		await searchAddress(address);
	}

	async function searchAddress(query) {
		try {
			const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;
			const response = await fetch(apiUrl);
			const data = await response.json();

			// Process the received data
			processAddressResults(data);
		} catch (error) {
			console.error("Error requesting Nominatim:", error);
		}
	}

	// To process the received data
	function processAddressResults(data) {
		// Extract relevant information from the data
		const addresses = data.map((result) => ({
			address: result.display_name,
			lat: result.lat,
			lon: result.lon,
		}));
		// Update the search results
		setSearchResults(addresses);
	}

	function handleSetMarker(address) {
		console.log("click address", address);
		const selectedAddress = searchResults.find(
			(result) => result.address === address
		);

		if (selectedAddress) {
			setSelectedAddress(selectedAddress);
		}
	}

	function renderMarkerComponent() {
		if (selectedAddress) {
			return renderMarker(selectedAddress);
		} else {
			return null;
		}
	}
	return (
		<Stack>
			<form name="searchForm" onSubmit={handleSubmit}>
				<TextField
					value={address}
					onChange={handleChange}
					name="address-input"
					label="Address"
					placeholder="Enter address"
				/>
				<Button type="submit">Search</Button>
			</form>
			<Stack>
				<ul>
					{searchResults.map((result) => (
						<li onClick={() => handleSetMarker(result.address)} key={uuidv4()}>
							{result.address}
						</li>
					))}
				</ul>
			</Stack>
			{renderMarkerComponent()}
		</Stack>
	);
}

export default SearchBarMap;
