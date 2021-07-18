import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./login";
import Register from "./register";
import TodoListAll from "./todoListAll";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
} from "react-router-dom";
import { getLists } from "./api";

function App() {
	const [jwtToken, setJwtToken] = useState("");
	const history = useHistory();
	return (
		<React.StrictMode>
			<Switch>
				<Route
					exact
					path="/login"
					render={() => <Login setJwtToken={setJwtToken} />}
				/>
				<Route exact path="/register" component={Register} />
				<Route
					exact
					path="/todoListAll"
					// component={TodoListAll}
					// token={jwtToken}
					render={(routerProps) => (
						<TodoListAll
							token={jwtToken}
							onLogout={() => {
								const token = jwtToken;
								setJwtToken(undefined);
								history.push("./login");
							}}
						/>
					)}
				/>
				<Route exact path="/" component={Login} />
			</Switch>
		</React.StrictMode>
	);
}

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	document.getElementById("root")
);
