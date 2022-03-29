import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TransitionElements from "../../shared/components/formElements/transitionElements";
import Header from "../../shared/components/navigation/Header";
import useNotificationModal from "../../shared/hooks/useNotificationModal";
import useGame from "../../shared/store/useGame";
import GamePageBody from "./GamePageBody";
import GamePageModals from "./GamePageModals";

const GamePage = () => {
  const [bothPlayersJoined, setBothPlayersJoined] = useState(false);
  const { openNotificationModal } = useNotificationModal();
  const socket = useGame((state) => state.socket);
  const { pathname } = useLocation();
  const [roomId] = useState(pathname.split("/")[2]);

  useEffect(() => {
    socket.emit("joinRoom", roomId);
    console.log("client trying to join room", roomId);

    socket.on("roomJoined", () => {
      console.log("client joined the room successfully");
    });

    socket.on("joinRoomError", ({ errorMessage }) => {
      console.log(errorMessage);
      openNotificationModal(errorMessage);
    });

    socket.on("startGame", ({ isPlayerOne }) => {
      setBothPlayersJoined(true);
      console.log("game can start");
    });

    socket.on("opponentLeft", () => {
      console.log("opponent left");
    });

    return () => {
      console.log("client wants to leave room:", roomId);
      socket.emit("leaveRoom", roomId);
      setBothPlayersJoined(false);
    };
  }, [socket, roomId, openNotificationModal]);

  return (
    <>
      <GamePageModals />

      <TransitionElements />

      <Header title="Game page" />

      <GamePageBody bothPlayersJoined={bothPlayersJoined} />
    </>
  );
};

export default GamePage;
