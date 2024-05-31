import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageBox from "../../components/messageBox/MessageBox";

function Home() {
	return (
		<div className="flex h-3/4 w-2/3 rounded-lg overflow-hidden bg bg-gray-100">
			<Sidebar />
			<MessageBox />
		</div>
	);
}

export default Home;
