import React, { useState } from "react";
// import useAxios from "axios-hooks";
import Axios from "axios";

const App = () => {
	// const [cases, setCases] = useState({});

	const agencies = [
		"agency1",
		"agency2",
		"agency3",
		"agency4",
		"agency5",
		"agency6",
		"agency7",
		"agency8",
		"agency9",
		"agency10"
	];

	// loop through index and values of agencies array
	agencies.forEach((value, index) => {
		// make API call to localhost:3000/agencyIndex
		Axios.get(`http://localhost:3000/${value}`)
			// console log API response if successful
			.then(res => {
				console.log(res.data[0]);
				// setCases(...res.data[0]);
			})
			// console log API response if unsuccessful
			.catch(err => console.log(err));
	});

	return (
		<div className="App">
			<h1>Case Management</h1>
		</div>
	);
};

export default App;
