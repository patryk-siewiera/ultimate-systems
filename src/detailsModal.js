import React, { useState } from "react";
import "./detailsModal.css";

function MapAllTasks({ listDetails }) {
	const [checked, setChecked] = useState(listDetails[0].isDone);
	return (
		<div className="oneTaskGrid">
			{/* {listDetails} */}
			{/* {JSON.stringify(listDetails[1])} */}

			<input
				type="checkbox"
				className="checkboxOneTask"
				checked={checked}
				onClick={() => {
					listDetails[0].isDone = !listDetails[0].isDone;
					setChecked(listDetails[0].isDone);
				}}
			/>
			<input
				type="text"
				placeholder="Task Name"
				className="taskName"
				value={listDetails[0].isDone}
			/>
		</div>
	);
}

export default function DetailsModal(props) {
	const { details } = props;
	if (!details) {
		// console.error("error", props);
		return <>Loading...</>;
	}
	return (
		<div className="overlayWindow">
			<div>
				<input
					type="text"
					className="newTaskInputBox"
					placeholder="list name"
					// value={props?.details[1]?.name}
				/>
			</div>
			<div className="horizontalLine" />
			MAP HERE ALL TASKS
			{/* <pre>{JSON.stringify(details, null, 2)}</pre> */}
			<div className="allTasks">
				{JSON.stringify(details)}
				{/* <MapAllTasks listDetails={details[1].task} /> */}
				{/* {mapAllTasks()} */}
				{/* {mapAllTasks()} */}
				{/* {mapAllTasks()} */}
			</div>
			<div className="buttonCancelAdd">
				<button className="cancelSmall">CANCEL</button>
				<button className="addSmall">ADD</button>
			</div>
			<div className="buttonCancelSave">
				<button className="cancelBottom" onClick={props.onClose}>
					CANCEL
				</button>
				<button className="saveBottom">SAVE</button>
			</div>
		</div>
	);
}

export { DetailsModal };
