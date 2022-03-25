import { io, Socket } from "socket.io-client";
import create from "zustand";
import getNewGameStatus from "../../game/services/getNewGameStatus";
import gameChars from "../../game/utils/gameChars";
import GameState from "../../game/utils/GameState";
import apiPath from "../utils/apiPath";

const useGame = create<GameState>((set, get) => ({
  roomCode: "",
  setRoomCode: (roomCode: string) => set(() => ({ roomCode })),

  socket: io(apiPath),

  gameStatus: Array(24).fill(gameChars.empty),
  setGameStatus: (cellTargetIndex: number) => {
    set((state) => ({ gameStatus: getNewGameStatus(state, cellTargetIndex) }));
    set((state) => ({ isPlayerOneTurn: !state.isPlayerOneTurn }));
  },

  getGameCell: (index: number) => get().gameStatus[index],

  isPlayerOneTurn: true,
}));

export default useGame;
