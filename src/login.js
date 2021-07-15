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
			console.log("logged succesfully")
			onLogin(loginResponse); // from insomnia
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
					<div id="createAccount">create an account</div>
				</div>
			</div>
		</div>
	);
}
