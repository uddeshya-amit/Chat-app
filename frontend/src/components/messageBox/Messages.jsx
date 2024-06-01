import React from "react";
import Message from "./Message";
import useGetMessage from "../../hooks/useGetMessage";

function Messages() {
	const { messages, loading } = useGetMessage();

	return (
		<>
			{!loading && messages.length === 0 && (
				<div className="h-full w-full bg-slate-200">
					<p className="text-lg font-sans font-semibold text-gray-500 p-4 text-center">
						Type a message to start conversation
					</p>
				</div>
			)}

			{loading ? (
				<div className="flex flex-1 justify-center items-center bg-slate-100">
					<span className="loading loading-dots loading-lg invert"></span>
				</div>
			) : (
				<div className="flex-1 px-4 overflow-auto ">
					{messages.map((message) => (
						<Message key={message._id} message={message} />
					))}
				</div>
			)}
		</>
	);
}

export default Messages;
