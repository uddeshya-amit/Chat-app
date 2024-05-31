import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { LuMessagesSquare } from "react-icons/lu";
import useConversation from "../../store/useConversation";

function MessageBox() {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const { messages, setMessages } = useConversation();

	useEffect(() => {
		return () => setSelectedConversation(null);
	}, []);

	return (
		<div className="w-full  flex flex-col background">
			{!selectedConversation ? (
				<RenderPage />
			) : (
				<>
					<div className="bg-blue-600 px-4 py-2 mb-2">
						<span className="text-gray-200 font-bold ">
							{selectedConversation.fullName}
							<span className="ml-2">@</span>
							{selectedConversation.userName}
						</span>
					</div>
					<Messages />

					<MessageInput />
				</>
			)}
		</div>
	);
}

export default MessageBox;

function RenderPage() {
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="flex flex-col items-center text-lg md:text-2xl font-semibold text-gray-800 ">
				<p>
					Wlcome to{" "}
					<span className="text-3xl text-blue-600 text-bold">ChatterBox</span>
				</p>
				<p className="text-center">Keep chatting!</p>
				<span>
					<LuMessagesSquare className="text-3xl md:text-6xl text-center mt-4 animate-pulse" />
				</span>
			</div>
		</div>
	);
}
