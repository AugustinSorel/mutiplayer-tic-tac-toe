import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TransitionElements from "../../shared/components/formElements/transitionElements";
import Header from "../../shared/components/navigation/Header";
import Loader from "../../shared/components/UIElements/Loader";
import useGame from "../../shared/store/useGame";
import GameBoard from "./GameBoard";

const GamePage = () => {
  const [bothPlayersJoined, setBothPlayersJoined] = useState(false);
  const socket = useGame((state) => state.socket);
  const { pathname } = useLocation();
  const [roomId] = useState(pathname.split("/")[2]);

  useEffect(() => {
    socket.emit("joinRoom", roomId);
    console.log("client trying to join room", roomId);

    return () => {
      console.log("client wants to leave room:", roomId);
      socket.emit("leaveRoom", roomId);
      setBothPlayersJoined(false);
    };
  }, [roomId, socket]);

  useEffect(() => {
    socket.on("roomJoined", () => {
      console.log("client joined the room successfully");
    });

    socket.on("joinRoomError", ({ errorMessage }) => {
      console.log(errorMessage);
    });

    socket.on("startGame", ({ isPlayerOne }) => {
      setBothPlayersJoined(true);
      console.log("game can start");
    });
  }, [socket]);

  return (
    <>
      <TransitionElements />

      <Header title="Game page" />

      <AnimatePresence exitBeforeEnter>
        {bothPlayersJoined ? (
          <GameBoard />
        ) : (
          <Loader text="Waiting for your friend🥳" />
        )}
      </AnimatePresence>
    </>
  );
};

export default GamePage;
