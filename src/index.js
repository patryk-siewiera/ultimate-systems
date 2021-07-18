import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./login";
import Register from "./register";
import TodoListAll from "./todoListAll";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
	const [jwtToken, setJwtToken] = useState();
	return (
		<React.StrictMode>
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/todoListAll" TodoListAll token={jwtToken} />
				<Route exact path="/" component={Login} />
			</Switch>
			
			
			{/* 
			// <Login
			// 	onLogin={(token) => {
			// 		setJwtToken(token);
			// 	}}
			// /> */}

			{/* {alert(jwtToken)} */}
			{/* <Link to="/register">
					<Register />
				</Link> */}
		</React.StrictMode>
	);
}

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
