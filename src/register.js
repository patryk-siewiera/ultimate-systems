import React from "react";
import { useForm } from "react-hook-form";

export default function Register() {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div>
			<div className="todoList">ToDo-List</div>
			<div className="loginRegisterRectangle">
				<div className="goBack">&lt;-</div>
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
						{...register("email", {
							required: true,
							maxLength: 20,
							placeholder: "test",
						})}
						placeholder="Email"
					/>
					<input
						{...register("password", {
							pattern: /^[A-Za-z]+$/i,
						})}
						placeholder="Password"
						type="password"
					/>
					<input
						{...register("passwordRepeat", {
							pattern: /^[A-Za-z]+$/i,
						})}
						placeholder="Repeat password"
						type="password"
					/>
					<input className="submit" type="submit" value="Create" />
				</form>
			</div>
		</div>
	);
}
