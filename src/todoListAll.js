import React from "react";
import "./todoListAll.css";
import { useForm } from "react-hook-form";
import { mockData } from "./mockData.js";

export default function TodoListAll() {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);

	// remove later
	const arr = JSON.stringify(mockData, null, 2);

	// remove above
	return (
		<div>
			<div className="todoList">ToDo-List</div>
			<div className="logout">logout</div>
			<div className="maxWidthList">
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
				<div className="text-white mt-44 ">
					{/* {mockData.map((element) => (
					<div>{element}</div>
				))} */}
					{/* {JSON.stringify(mockData[1].task[0])} */}
					<ul>
						{Object.entries(mockData).map((item) => (
							<div>
								<li>{JSON.stringify(item)} </li>
							</div>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
