import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageBox from "../../components/messageBox/MessageBox";

function Home() {
	return (
		<div className="flex sm:h-[450px] md:h-[450px] rounded-lg overflow-hidden bg bg-gray-100">
			<Sidebar />
			<MessageBox />
		</div>
	);
}

export default Home;
