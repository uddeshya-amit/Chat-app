import React from "react";

export default function GenderCheckbox() {
	return (
		<div className="flex mt-2 gap-4">
			<div>
				<label className="label  cursor-pointer gap-2">
					<span className="label-text"> Male </span>
					<input type="radio" className="radio" />
				</label>
			</div>
			<div>
				<label className="label  cursor-pointer gap-2">
					<span className="label-text"> Female </span>
					<input type="radio" className="radio" />
				</label>
			</div>
		</div>
	);
}
