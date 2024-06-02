import React from "react";
import useConversation from "../../store/useConversation";
import { useSocketContext } from "../../context/SocketContext";

function Conversation({ conversation, lastidx }) {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

	return (
		<>
			<div
				className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
			${isSelected ? "bg-sky-500" : ""}`}
				onClick={() => setSelectedConversation(conversation)}>
				<div className={`avatar ${isOnline ? "online" : "offline"}`}>
					<div className="w-12  rounded-full">
						<img src={conversation.profilePic} alt="user_profile" />
					</div>
				</div>
				<div className="px-4">
					<p className="font-bold text-gray-800">{conversation.userName}</p>
				</div>
			</div>

			{lastidx ? null : <div className="divider my-0 mx-0 h-1"></div>}
		</>
	);
}

export default Conversation;
