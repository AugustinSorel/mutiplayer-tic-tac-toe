import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import TransitionElements from "../../shared/components/formElements/transitionElements";
import Header from "../../shared/components/navigation/Header";
import apiPath from "../../shared/utils/apiPath";
import GamePageBody from "./GamePageBody";
import GamePageModals from "./GamePageModals";

const GamePage = () => {
  const { pathname } = useLocation();

  const [roomId] = useState(pathname.split("/")[2]);
  const [socket] = useState(io(apiPath));

  useEffect(() => {
    console.log("client trying to join room", roomId);
    socket.emit("joinRoom", roomId);

    socket.on("roomJoined", () => {
      console.log("client joined room", roomId);
    });

    socket.on("joinRoomError", ({ errorMessage }) => {
      console.log("client join room error", errorMessage);
    });

    socket.on("startGame", ({ isPlayerOne }) => {
      console.log("client start game", isPlayerOne);
    });

    socket.on("opponentLeft", () => {
      console.log("client opponent left");
    });

    return () => {
      console.log("client wants to leave room:", roomId);
      socket.emit("leaveRoom", roomId);
    };
  }, [socket, roomId]);

  return (
    <>
      <GamePageModals />

      <TransitionElements />

      <Header title="Game page" />

      <GamePageBody />
    </>
  );
};

export default GamePage;
