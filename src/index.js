import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./login";
import Register from "./register";
import TodoListAll from "./todoListAll";

ReactDOM.render(
	<React.StrictMode>
		<Login />
		{/* <Register /> */}
		{/* <TodoListAll /> */}
	</React.StrictMode>,
	document.getElementById("root")
);
