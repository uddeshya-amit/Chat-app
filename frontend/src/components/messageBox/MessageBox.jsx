import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { LuMessagesSquare } from "react-icons/lu";

function MessageBox() {
  const renderPage = true
	return (
		<div className="md:min-w-[450px] flex flex-col">
      {renderPage ? <RenderPage/>:(
      <>
				<div className="bg-blue-600 px-4 py-2 mb-2">
					<span className="text-gray-200 font-bold"> Super Man</span>
				</div>
				<Messages />
				<MessageInput />
			</>
      )}
		</div>
		
	)
}

export default MessageBox;

function RenderPage() {
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="flex flex-col items-center text-lg md:text-2xl font-semibold text-gray-800 ">
				<p>Wlcome to the chat room</p>
				<p className="text-center">Keep chatting!</p>
				<span>
					<LuMessagesSquare  className="text-3xl md:text-6xl text-center mt-4 animate-pulse"/>
				</span>
			</div>
		</div>
	);
}
