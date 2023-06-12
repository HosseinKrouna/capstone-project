import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

function SearchBarMap() {
	const [address, setAddress] = useState("");

	function handleChange(event) {
		setAddress(event.target.value);
		console.log(event.target.value);
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
	// To processing the received data
	function processAddressResults(data) {
		// Extract relevant information from the data
		const addresses = data.map((result) => ({
			address: result.display_name,
			lat: result.lat,
			lon: result.lon,
		}));
		// "addresses" can be used for application
		renderAddresses(addresses);
	}

	function renderAddresses(addresses) {
		// Display the addresses on a map or show them in a list

		return <Stack>{addresses}</Stack>;
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
		</Stack>
	);
}

export default SearchBarMap;

//ANCHOR - import { Button, Stack, TextField } from "@mui/material";
// import { useState } from "react";

// function SearchBarMap() {
//   const [address, setAddress] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   async function handleChange(event) {
//     const query = event.target.value;
//     setAddress(query);
//     console.log(query);

//     if (query) {
//       await searchAddress(query);
//     } else {
//       setSearchResults([]);
//     }
//   }

//   async function handleSubmit(event) {
//     event.preventDefault();
//     await searchAddress(address);
//   }

//   async function searchAddress(query) {
//     try {
//       const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;
//       const response = await fetch(apiUrl);
//       const data = await response.json();

//       // Process the received data
//       processAddressResults(data);
//     } catch (error) {
//       console.error("Error requesting Nominatim:", error);
//     }
//   }

//   // To process the received data
//   function processAddressResults(data) {
//     // Extract relevant information from the data
//     const addresses = data.map((result) => ({
//       address: result.display_name,
//       lat: result.lat,
//       lon: result.lon,
//     }));
//     // Update the search results
//     setSearchResults(addresses);
//   }

//   return (
//     <Stack>
//       <form name="searchForm" onSubmit={handleSubmit}>
//         <TextField
//           value={address}
//           onChange={handleChange}
//           name="address-input"
//           label="Address"
//           placeholder="Enter address"
//         />
//         <Button type="submit">Search</Button>
//       </form>

//       <Stack>
//         {searchResults.map((address) => (
//           <div key={address.address}>{address.address}</div>
//         ))}
//       </Stack>
//     </Stack>
//   );
// }

// export default SearchBarMap;
