import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

function MessageInput() {
	const [message, setMessage] = useState("");
	const { sendMessage } = useSendMessage();
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};
	return (
		<form className="" onSubmit={handleSubmit}>
			<div className="w-full relative">
				<input
					type="text"
					className="border-b-2 border-slate-400 text-sm block w-full p-2.5 bg-gray-100  text-black  focus:outline-none focus:border-slate-900 focus:bg-slate-200 "
					placeholder="Message..."
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button className="absolute inset-y-0 end-0 flex items-center justify-center px-3">
					<BsSend className="invert" />
				</button>
			</div>
		</form>
	);
}

export default MessageInput;
