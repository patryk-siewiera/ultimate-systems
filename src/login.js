import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./login.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// -----move this later to api.js
const basePath = "https://recruitment.ultimate.systems";

const data0 = {
	identifier: "testUser55",
	password: "testUser15",
};

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

export default function Login({ onLogin }) {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		login(data).then((loginResponse) => {
			onLogin(loginResponse["jwt"]); // from insomnia

			if (loginResponse["jwt"] === undefined) {
				alert("Login or password incorrect - try again");
			} else {
				alert("Logged Succesfuly");
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
						</div>{" "}
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
