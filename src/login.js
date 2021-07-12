import React from "react";
import { useForm } from "react-hook-form";
import "./login.css";

export default function Login() {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div>
			{" "}
			<div className="todoList">ToDo-List</div>
			<div className="loginRectangle">
				<div className="loginTitle">Login</div>
				<div className="gridEmailPassword">
					<form onSubmit={handleSubmit(onSubmit)}>
						<input
							{...register("firstName", {
								required: true,
								maxLength: 20,
							})}
						/>
						<input
							{...register("lastName", {
								pattern: /^[A-Za-z]+$/i,
							})}
						/>
						<input className="submit" type="submit" value="Login" />
					</form>
					<div className="or">or</div>
					<div className="createAccount">create an account</div>
				</div>
			</div>
		</div>
	);
}
