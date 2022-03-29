import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import gameStore from "../../shared/store/GameSore";
import useJoinRoomError from "./useJoinRoomError";
import useLeaveRoom from "./useLeaveRoom";
import useOpponentLeft from "./useOpponentLeft";
import useJoinedRoom from "./useRoomJoined";
import useStartGame from "./useStartGame";

const useGame = () => {
  const { pathname } = useLocation();
  const joinRoomErrorHandler = useJoinRoomError();
  const startGameHandler = useStartGame();
  const roomJoinedHandler = useJoinedRoom();
  const opponentLeftHandler = useOpponentLeft();
  const leaveRoomHandler = useLeaveRoom();

  const socket = gameStore((state) => state.socket);
  const [roomId] = useState(pathname.split("/")[2]);

  useEffect(() => {
    console.log("client trying to join room", roomId);
    socket.emit("joinRoom", roomId);

    socket.on("roomJoined", roomJoinedHandler);

    socket.on("joinRoomError", ({ errorMessage }) =>
      joinRoomErrorHandler(errorMessage)
    );

    socket.on("startGame", startGameHandler);

    socket.on("opponentLeft", opponentLeftHandler);

    return () => leaveRoomHandler(roomId);
  }, [socket, roomId]);
};

export default useGame;
