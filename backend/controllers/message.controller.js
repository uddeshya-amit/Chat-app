import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
	try {
		const { message } = req.body;
		const recieverId = req.params.id;

		const senderId = req.user._id;

		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, recieverId] },
		});
		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, recieverId],
			});
		}

		const newMessage = new Message({
			senderId,
			recieverId,
			message,
		});

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

		await Promise.all([conversation.save(), newMessage.save()]);

		res.status(201).json(newMessage);
	} catch (error) {
		console.log("error in send message controller", error.message);
	}
};

export const getMessages = async (req, res) => {
	try {
		const userToChatId = req.params.id;
		const senderId = req.user._id;
		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate("messages");
		if (!conversation) return res.status(200).json([]);
		const messages = conversation.messages;
		res.status(200).json(messages);
	} catch (error) {
		console.log("error in send message controller", error.message);
		res.status(500).json({ message: "Internal server error" });
	}
};
