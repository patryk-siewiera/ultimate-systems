import React from "react";
import "./todoListAll.css";
import { useForm } from "react-hook-form";
import { mockData } from "./mockData2.js";
import { useState } from "react";

export default function TodoListAll() {
	function dateFormatter(e) {
		let outputDate = new Date(Date.parse(e));
		let day = outputDate.toLocaleDateString("pl-PL", { day: "numeric" });
		day = day.length !== 1 ? day : "0" + day;
		let month = outputDate.toLocaleDateString("pl-PL", {
			month: "numeric",
		});
		month = month.length !== 1 ? month : "0" + month;
		let year = outputDate.toLocaleDateString("pl-PL", { year: "numeric" });
		let outputDateFormatted = day + "-" + month + "-" + year;
		return outputDateFormatted;
	}

	function calculateCompleteUncompleteAllTasks(e) {
		let countAll = e.length;
		let countIsDone = e.filter((value) => value.isDone === true).length;
		let countIsNotDone = countAll - countIsDone;
		return (
			"Completed: " +
			countIsDone +
			" Uncompleted: " +
			countIsNotDone +
			" All: " +
			countAll
		);
	}

	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);

	const [search, setSearch] = useState("");
	const [sortBy, setSortBy] = useState("unordered");
	console.log("====================================");
	console.log(search);
	console.log("====================================");

	return (
		<div>
			<div className="todoList">ToDo-List</div>
			<div className="logout">logout</div>
			<div className="maxWidthList">
				<input
					{...register("search", {})}
					placeholder="Search..."
					type="text"
					className="searchInput"
					onChange={(e) => setSearch(e.target.value)}
				/>
				<select
					id="sortBy"
					className="dropdown"
					onChange={(e) => setSortBy(e.target.value)}
				>
					<option value="unordered">unordered</option>
					<option value="AZ">A-&gt;Z alphabetical</option>
					<option value="ZA">Z-&gt;A</option>
				</select>
				<div className="text-white mt-44 ">
					<ul>
						{Object.entries(mockData)
							.filter((item) => {
								return (
									item[1].name
										.toLowerCase()
										.indexOf(search.toLowerCase()) >= 0
								);
							})
							.map((item) => (
								<div>
									<li>
										<div className="gridInside">
											<div className="listName">
												{item[1].name}
											</div>
											<div className="createdAt">
												Created at:{" "}
												{dateFormatter(
													item[1].created_at
												)}
											</div>
											<div className="counter">
												{calculateCompleteUncompleteAllTasks(
													item[1].task
												)}
											</div>
										</div>
									</li>
								</div>
							))}
					</ul>
				</div>
			</div>
		</div>
	);
}
