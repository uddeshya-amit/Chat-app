import { Server } from "socket.io";
import http from "http";
import express from "express";

export const app = express();

export const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: ["http://localhost:3000"],
		methods: ["GET", "POST"],
	},
});

io.on("connection", (socket) => {
	console.log("user connected", socket.id);
	socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
	});
});

export default { app, io, server };
