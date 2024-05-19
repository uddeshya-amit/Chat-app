import React from "react";
import { BsSend } from "react-icons/bs";

function MessageInput() {
	return (
		<form className="px-2 my-1">
			<div className="w-full relative">
				<input
					type="text"
					className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700  text-white  focus:outline-none"
					placeholder="Message..."
				/>
				<button className="absolute inset-y-0 end-0 flex items-center pe-3">
					<BsSend />
				</button>
			</div>
		</form>
	);
}

export default MessageInput;
