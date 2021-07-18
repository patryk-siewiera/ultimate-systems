import React from "react";
import "./detailsModal.css";

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
			<div> map of tasks</div>
			this is details modal
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
