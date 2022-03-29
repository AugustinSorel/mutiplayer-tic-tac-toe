import gameStore from "../../shared/store/GameSore";

const useLeaveRoom = () => {
  const setAreBothPlayersIn = gameStore((state) => state.setAreBothPlayersIn);
  const socket = gameStore((state) => state.socket);

  const leaveRoomHandler = (roomId: string) => {
    console.log("client wants to leave room:", roomId);
    socket.emit("leaveRoom", roomId);
    setAreBothPlayersIn(false);
  };

  return leaveRoomHandler;
};

export default useLeaveRoom;
