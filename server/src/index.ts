import express, { Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req: Request, res: Response) => {
  res.sendStatus(200);
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
