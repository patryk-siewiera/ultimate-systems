import React, { useState, useEffect, useCallback } from "react";
import "./todoListAll.css";
import { useForm } from "react-hook-form";
import { mockData } from "./mockData.js";
import { getLists } from "./api";
import { useHistory } from "react-router-dom";
import { DetailsModal } from "./detailsModal";

function findElementByID(array, id) {
	const elFound = array.find((el) => {
		// debugger;
		return el[1].id == id;
	});
	return elFound[1];
}

export default function TodoListAll({ token, onLogout }) {
	// replace this when fetch will be implemented
	const [userData, setUserData] = useState([]);
	// const userData = mockData;
	// end of comment

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
	const [search, setSearch] = useState("");
	const [sortBy, setSortBy] = useState(0);
	const [listDetails, setListDetails] = useState("");
	const [showDetails, setShowDetails] = useState(false);
	const [id, setId] = useState("");

	const history = useHistory();

	useEffect(() => {
		const Udata = getLists(token); // dodac await i linjka wyzej bedzie juz console.log(Udata)
		Udata.then((response) => {
			setUserData(response);
		});
	}, []);

	useEffect(() => {
		if (token === "") {
			history.push("login");
		}
	}, [token]);

	const data = useCallback(() => {
		return new Promise((res) => {
			const auth = token;
			// api.getTodos(token)
			return [{}, {}];
		});
	}, []);

	const [visibleData, setVisibleData] = useState([]);

	useEffect(() => {
		const data = Object.entries(userData)
			.filter((item) => {
				return (
					item[1].name.toLowerCase().indexOf(search.toLowerCase()) >=
					0
				);
			})
			.sort((a, b) => {
				const str1 = a[1].name.toString();
				const str2 = b[1].name.toString();
				if (str1 === str2 || sortBy === 0) return 0;
				return (str1 > str2 ? 1 : -1) * sortBy;
			});
		setVisibleData(data);
	}, [userData, search, sortBy]);

	return (
		<div>
			<div className="todoList">ToDo-List</div>
			<a
				href="#"
				className="logout"
				onClick={() => {
					onLogout();
				}}
			>
				logout
			</a>
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
					<option value={0}>Unordered</option>
					<option value={1}>A-&gt;Z alphabetical</option>
					<option value={-1}>Z-&gt;A</option>
				</select>
				<div className="text-white mt-44 ">
					<ul>
						{visibleData.map((item) => (
							<div>
								<li
									onClick={() => {
										setShowDetails(true);
										setId(item[1].id);
									}}
								>
									<div className="gridInside">
										<div className="listName">
											{item[1].name}
										</div>
										<div className="createdAt">
											Created at:{" "}
											{dateFormatter(item[1].created_at)}
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
			{showDetails && visibleData && (
				<DetailsModal
					details={findElementByID(visibleData, id)}
					onClose={() => setShowDetails(false)}
				/>
			)}
		</div>
	);
}
