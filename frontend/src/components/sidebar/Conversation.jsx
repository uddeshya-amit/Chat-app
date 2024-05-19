import React from "react";
import avatar from "../../assets/gamer.png"

function Conversation() {
	return (
		<>
			<div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
				<div className="avatar online">
					<div className="w-12  rounded-full">
						<img src={avatar} alt="" />
					</div>
				</div>
				<div className="px-4">
					<p className="font-bold text-gray-800">Batman</p>
				</div>
			</div>
            <div className="divider my-0 mx-0 h-1"></div>
		</>
	);
}

export default Conversation;
