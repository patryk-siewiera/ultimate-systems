import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Register() {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);

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
							pattern: /^[A-Za-z]+$/i,
						})}
						placeholder="Password"
						type="password"
					/>
					<input
						{...register("passwordRepeat", {
							required: true,
							pattern: /^[A-Za-z]+$/i,
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
