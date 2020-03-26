import React from "react";
// import useAxios from "axios-hooks";
import Axios from "axios";

const App = () => {
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

	Axios.get(`http://localhost:3000/${agencies[0]}`)
		.then(res => console.log(res.data[0]))
		.catch(err => console.log(err));

	// const [{ data, loading, error }, refetch] = useAxios(
	// 	"https://jsonplaceholder.typicode.com/users/"
	// );

	// if (loading) return <p>Loading...</p>;
	// if (error) return <p>Error!</p>;

	return (
		<div className="App">
			<h1>Case Management</h1>
			{/* <button onClick={refetch}>refetch</button> */}
			{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
		</div>
	);
};

export default App;
