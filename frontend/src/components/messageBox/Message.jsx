import React from "react";
// import avatar from "../../assets/gamer.png";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";
import formatCreatedAt from "../../utils/formattedTime";

function Message({ message }) {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const time = formatCreatedAt(message.createdAt)
	const fromSender = message.senderId === authUser._id;
	const profilePic = fromSender
		? authUser.profilePic
		: selectedConversation?.profilePic;

	return (
		<div className={`chat ${fromSender ? "chat-end" : "chat-start"}`}>
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img src={profilePic} alt="" />
				</div>
			</div>
			<div className="chat-bubble text-white bg-blue-500">
				{message.message}
			</div>
			<div className="chat chat-footer opacity-100 text-xs flex gap-1 items-center text-slate-800">
				{time}
			</div>
		</div>
	);
}

export default Message;
