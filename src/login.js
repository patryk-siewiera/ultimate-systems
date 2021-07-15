import React from "react";
import { useForm } from "react-hook-form";
import "./login.css";

// -----move this later to api.js
const basePath = "https://recruitment.ultimate.systems";

const data0 = {
	identifier: "testUser55",
	password: "testUser15",
};

function login(data) {
	return fetch("https://recruitment.ultimate.systems/auth/local", {
		method: "POST",
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
		},
		body: data,
	})
		.then((response) => {
			console.log(response);
		})
		.catch((err) => {
			console.error(err);
		});
}

// ----- end of api.js

export default function Login({ onLogin }) {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => {
		data = JSON.stringify(data);
		login(data).then((loginResponse) => {
			// onLogin(loginResponse["jwt"]); // from insomnia
		});
		console.log(data);
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
								maxLength: 20,
								required: true,
							})}
							placeholder="Email or Username"
						/>
						<input
							{...register("password", { required: true })}
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
					<div id="createAccount">create an account</div>
				</div>
			</div>
		</div>
	);
}
