import React from "react";
import avatar from "../../assets/gamer.png";

function Message() {
	return (
		<div className="chat chat-end">
			<div className="chat-image avatar">
				<div className="w-10 rounded-full">
					<img src={avatar} alt="" />
				</div>
			</div>
			<div className="chat-bubble text-white bg-blue-500">hii there</div>
			<div className="chat chat-footer opacity-100 text-xs flex gap-1 items-center text-slate-800">
				12:30
			</div>
		</div>
	);
}

export default Message;
