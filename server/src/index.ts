import express, { Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.get("/", (req: Request, res: Response) => {
  res.sendStatus(200);
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("joinRoom", async (roomId) => {
    console.log("user is trying to enter the room:", roomId);

    const connectedSockets = io.sockets.adapter.rooms.get(roomId);
    const socketRooms = Array.from(socket.rooms.values()).filter(
      (room) => room !== socket.id
    );

    console.log("connected sockets:", connectedSockets);
    console.log("socket rooms:", socketRooms);

    if (socketRooms.length > 0) {
      socket.emit("joinRoomError", {
        errorMessage: "You have already joined this room!",
      });

      return;
    }

    if (connectedSockets && connectedSockets.size === 2) {
      socket.emit("joinRoomError", {
        errorMessage: "Room is full please choose another room to play!",
      });

      return;
    }

    await socket.join(roomId);
    socket.emit("roomJoined");

    if (io.sockets.adapter.rooms.get(roomId)?.size === 2) {
      socket.emit("startGame", { isPlayerOne: true });
      socket.to(roomId).emit("startGame", { isPlayerOne: false });
    }
  });

  socket.on("leaveRoom", (roomId) => {
    console.log("user is trying to leave the room:", roomId);

    socket.leave(roomId);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
