import React from "react";
import "./todoListAll.css";
import { useForm } from "react-hook-form";

export default function TodoListAll() {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);
	return (
		<div>
			<div className="todoList">ToDo-List</div>
			<div className="logout">logout</div>

			<input
				{...register("search", {})}
				placeholder="Search"
				type="text"
				className="searchInput"
			/>
			<select id="sortBy" className="dropdown">
				<option value="AZ">A&lt;-Z alfabetycznie</option>
				<option value="ZA">Z-&gt;A</option>
			</select>
		</div>
	);
}
