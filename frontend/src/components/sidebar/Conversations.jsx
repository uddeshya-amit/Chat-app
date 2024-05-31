import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";

function Conversations() {
	const [loading, conversations] = useGetConversations();
	console.log("conversations", conversations);
	return (
		<div className="flex-1 overflow-auto ">
			{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					lastidx={idx === conversations.length - 1}
				/>
			))}

			{loading ? (
				<span className="loading loading-spinner mx-auto"></span>
			) : null}
		</div>
	);
}

export default Conversations;
