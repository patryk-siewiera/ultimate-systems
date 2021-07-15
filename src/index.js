import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./login";
import Register from "./register";
import TodoListAll from "./todoListAll";

function App() {
	const [jwtToken, setJwtToken] = useState();
	return (
		<React.StrictMode>
			<Login
				onLogin={(token) => {
					setJwtToken(token);
				}}
			/>
			{/* <Register /> */}
			{/* <TodoListAll token={jwtToken} /> */}
		</React.StrictMode>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
