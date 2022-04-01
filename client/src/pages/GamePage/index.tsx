import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import gameChars from "../../game/utils/gameChars";
import TransitionElements from "../../shared/components/formElements/transitionElements";
import Header from "../../shared/components/navigation/Header";
import useNotificationModal from "../../shared/hooks/useNotificationModal";
import gameStore from "../../shared/store/GameSore";
import apiPath from "../../shared/utils/apiPath";
import GamePageBody from "./GamePageBody";
import GamePageModals from "./GamePageModals";

const GamePage = () => {
  const setBothPlayersIn = gameStore((state) => state.setAreBothPlayersIn);
  const { openNotificationModal } = useNotificationModal();
  const setIsPlayerOneTurn = gameStore((state) => state.setIsPlayerOneTurn);
  const setGameStatus = gameStore((state) => state.setGameStatus);
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
      openNotificationModal(errorMessage);
    });

    socket.on("startGame", ({ isPlayerOne }) => {
      console.log("client start game", isPlayerOne);
      setIsPlayerOneTurn(isPlayerOne);
      setBothPlayersIn(true);
    });

    socket.on("opponentLeft", () => {
      console.log("client opponent left");
      openNotificationModal("Your opponent left the game😢");
      setBothPlayersIn(false);
    });

    socket.on("opponentPlayed", (newGameStatus: gameChars[]) => {
      console.log("client opponent played", newGameStatus);
      setGameStatus(newGameStatus);
    });

    return () => {
      console.log("client wants to leave room:", roomId);
      socket.emit("leaveRoom", roomId);
      setBothPlayersIn(false);
    };
  }, [
    socket,
    roomId,
    openNotificationModal,
    setBothPlayersIn,
    setGameStatus,
    setIsPlayerOneTurn,
  ]);

  return (
    <>
      <GamePageModals />

      <TransitionElements />

      <Header title="Game page" />

      <GamePageBody socket={socket} roomId={roomId} />
    </>
  );
};

export default GamePage;
