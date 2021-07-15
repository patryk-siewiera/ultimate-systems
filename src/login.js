import React from "react";
import { useForm } from "react-hook-form";
import { Api } from "./api";
import "./login.css";

export default function Login() {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div>
			{" "}
			<div className="todoList">ToDo-List</div>
			<div className="loginRegisterRectangle">
				<div className="titleAccount">Login</div>
				<div className="gridEmailPassword">
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							{...register("username", {
								required: true,
								maxLength: 20,
								placeholder: "test",
							})}
							placeholder="Email or Username"
						/>
						<input
							{...register("password", {
								pattern: /^[A-Za-z]+$/i,
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
