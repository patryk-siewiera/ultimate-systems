import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
	useHistory,
} from "react-router-dom";
import "./index.css";
import Login from "./login";
import Register from "./register";
import TodoListAll from "./todoListAll";

function App() {
	const [jwtToken, setJwtToken] = useState("");
	const history = useHistory();
	return (
		<React.StrictMode>
			<Switch>
				<Route
					exact
					path="/ultimate-systems/login"
					render={() => <Login setJwtToken={setJwtToken} />}
				/>
				<Route exact path="register" component={Register} />
				<Route
					exact
					path="/ultimate-systems/todoListAll"
					// component={TodoListAll}
					// token={jwtToken}
					render={(routerProps) => (
						<TodoListAll
							token={jwtToken}
							onLogout={() => {
								const token = jwtToken;
								setJwtToken(undefined);
								history.push("/ultimate-systems/login");
							}}
						/>
					)}
				/>
				<Route exact path="/">
					<Redirect to="/ultimate-systems/login" />
				</Route>
				<Route exact path="/ultimate-systems">
					<Redirect to="/ultimate-systems/login" />
				</Route>
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
