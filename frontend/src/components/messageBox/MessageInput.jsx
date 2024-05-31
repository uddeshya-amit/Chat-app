import React from "react";
import { BsSend } from "react-icons/bs";

function MessageInput() {
	return (
		<form className="">
			<div className="w-full relative">
				<input
					type="text"
					className="border-b-2 border-slate-400 text-sm block w-full p-2.5 bg-gray-100  text-black  focus:outline-none focus:border-slate-900 focus:bg-slate-200 "
					placeholder="Message..."
				/>
				<button className="absolute inset-y-0 end-0 flex items-center justify-center px-3  hover:bg-gray-300">
					<BsSend className="invert" />
				</button>
			</div>
		</form>
	);
}

export default MessageInput;
