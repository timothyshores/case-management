import React from "react";
import useAxios from "axios-hooks";

const App = () => {
	const [{ data, loading, error }, refetch] = useAxios(
		"https://jsonplaceholder.typicode.com/users/"
	);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	return (
		<div className="App">
			<h1>Case Management</h1>
			<button onClick={refetch}>refetch</button>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
};

export default App;
