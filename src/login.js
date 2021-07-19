import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import "./login.css";

// -----move this later to api.js
const basePath = "https://recruitment.ultimate.systems";

function login(data) {
	return fetch(`${basePath}/auth/local`, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(data),
	}).then((r) => r.json());
}

// ----- end of api.js

export default function Login({ onLogin, setJwtToken }) {
	let isAuthenticated = false;
	let history = useHistory();
	const { register, handleSubmit } = useForm({

	});
	const onSubmit = (data) => {
		login(data).then((loginResponse) => {
			// onLogin(loginResponse["jwt"]); // from insomnia

			if (loginResponse["jwt"] === undefined) {
				isAuthenticated = false;
				alert("Login or password incorrect - try again");
				return isAuthenticated;
			} else {
				isAuthenticated = true;
				// hook use history
				const token = loginResponse["jwt"];
				setJwtToken(token);
				history.push("/todoListAll");
				return isAuthenticated;
			}
		});
	};

	return (
		<div>
			{" "}
			<div className="todoList">ToDo-List</div>
			<div className="loginRegisterRectangle">
				<div className="titleAccount">Login</div>
				<div className="gridEmailPassword">
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							{...register("identifier", {
								required: true,
								maxLength: 20,
							})}
							placeholder="Email or Username"
						/>
						<input
							{...register("password", {
								required: true,
							})}
							placeholder="Password"
							type="password"
						/>
						<div>
							<input
								className="submit"
								type="submit"
								value="Login"
							/>
						</div>
					</form>
					<div className="or">or</div>
					<Link to="/register">
						<div id="createAccount">create an account</div>
					</Link>
				</div>
			</div>
		</div>
	);
}
