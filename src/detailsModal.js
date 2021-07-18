import React from "react";
import "./detailsModal.css";

function mapAllTasks() {
	return (
		<div className="oneTaskGrid">
			<input type="checkbox" className="checkboxOneTask" />
			<input type="text" placeholder="Task Name" className="taskName" />
		</div>
	);
}

export default function DetailsModal(data) {
	return (
		<div className="overlayWindow">
			<div>
				<input
					type="text"
					className="newTaskInputBox"
					placeholder="List name"
				/>
			</div>
			<div className="horizontalLine" />
			MAP HERE ALL TASKS
			<div className="allTasks">
				{mapAllTasks()}
				{mapAllTasks()}
				{mapAllTasks()}
				{mapAllTasks()}
			</div>
			<div className="buttonCancelAdd">
				<button className="cancelSmall">CANCEL</button>
				<button className="addSmall">ADD</button>
			</div>
			<div className="buttonCancelSave">
				<button className="cancelBottom">CANCEL</button>
				<button className="saveBottom">SAVE</button>
			</div>
		</div>
	);
}

export { DetailsModal };
