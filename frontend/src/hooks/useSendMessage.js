import useConversation from "../store/useConversation";
import toast from "react-hot-toast";

function useSendMessage() {
	const { messages, setMessages, selectedConversation } = useConversation();
	const sendMessage = async (message) => {
		try {
			const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({ message }),
			});
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			setMessages([...messages, data]);
		} catch (error) {
			toast.error(error.message);
		}
	};
	return { sendMessage };
}

export default useSendMessage;
