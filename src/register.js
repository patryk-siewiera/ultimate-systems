import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import { registerUser } from "./api";

export default function Register() {
	// compare passwords - hookforms, custom validator
	const { register, handleSubmit } = useForm();
	const history = useHistory();
	const onSubmit = (data) => {
		console.log(data);
		registerUser({
			username: data.username,
			email: data.email,
			password: data.password,
		}).then((res) => {
			if (res["jwt"] !== undefined) {
				// TODO
				// setJwtToken(res["jwt"]);
				history.push("login");
				alert("User created succesfully, please login ");
			} else {
				alert("Registration failed");
			}
		});
	};

	return (
		<div>
			<div className="todoList">ToDo-List</div>
			<div className="loginRegisterRectangle">
				<Link to="/login">
					<div className="goBack">&lt;-</div>
				</Link>
				<div className="titleAccount">Create new account</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						{...register("username", {
							required: true,
							maxLength: 20,
							placeholder: "test",
						})}
						placeholder="Username"
					/>
					<input
						type="email"
						{...register("email", {
							required: true,
							maxLength: 20,
							placeholder: "test",
						})}
						placeholder="Email"
					/>
					<input
						{...register("password", {
							required: true,
						})}
						placeholder="Password"
						type="password"
					/>
					<input
						{...register("passwordRepeat", {
							required: true,
						})}
						placeholder="Repeat password"
						type="password"
					/>
					<div>
						<input
							className="submit"
							type="submit"
							value="Create"
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
