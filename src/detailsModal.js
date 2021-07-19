import React, { useState } from "react";
import "./detailsModal.css";

function MapAllTasks({ listDetails, onNameChange }) {
	const [checked, setChecked] = useState(listDetails.isDone);
	const [name, setName] = useState(listDetails.name);
	return (
		<div className="oneTaskGrid">
			<input
				type="checkbox"
				className="checkboxOneTask"
				checked={checked}
				onClick={() => {
					listDetails.isDone = !listDetails.isDone;
					setChecked(listDetails.isDone);
				}}
			/>
			<input
				type="text"
				placeholder="Task Name"
				className="taskName"
				value={name}
				title={listDetails.name}
				onChange={(ev) => {
					const nameValue = ev.target.value;
					listDetails.name = nameValue;
					onNameChange && onNameChange(nameValue);
					setName(nameValue);
				}}
			/>
		</div>
	);
}

export function deepcopy(obj) {
	return JSON.parse(JSON.stringify(obj));
}

export default function DetailsModal(props) {
	const { details, onConfirmSave } = props;
	const [nameList, setNameList] = useState(props?.details?.name);
	const [tempTasksSublist, setTempTasksSublist] = useState(
		deepcopy(details?.task || [])
	);
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
					value={nameList}
					onChange={(ev) => {
						setNameList(ev.target.value);
						details.name = nameList;
					}}
				/>
			</div>
			<div className="horizontalLine" />
			<div className="allTasks">
				{tempTasksSublist.map((e) => (
					<MapAllTasks
						listDetails={e}
						onNameChange={(name) => {
							e.name = name;
							setTempTasksSublist([...tempTasksSublist]);
						}}
					/>
				))}
			</div>
			<div className="buttonCancelAdd">
				<button className="cancelSmall">CANCEL</button>
				<button
					className="addSmall"
					onClick={() => {
						setTempTasksSublist([...tempTasksSublist, {}]);
					}}
				>
					ADD
				</button>
			</div>
			<div className="buttonCancelSave">
				<button className="cancelBottom" onClick={props.onClose}>
					CANCEL
				</button>
				<div className="emptySpace" />
				<button
					className="saveBottom"
					onClick={(ev) => {
						onConfirmSave(tempTasksSublist, nameList);
					}}
					title={JSON.stringify(tempTasksSublist, null, 2)}
				>
					SAVE
				</button>
			</div>
		</div>
	);
}

export { DetailsModal };
