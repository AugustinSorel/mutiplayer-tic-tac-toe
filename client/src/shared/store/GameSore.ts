import { io } from "socket.io-client";
import create from "zustand";
import getNewGameStatus from "../../game/services/getNewGameStatus";
import gameChars from "../../game/utils/gameChars";
import GameState from "../../game/utils/GameState";
import apiPath from "../utils/apiPath";

const gameStore = create<GameState>((set, get) => ({
  socket: io(apiPath),

  gameStatus: Array(24).fill(gameChars.empty),
  setGameStatus: (cellTargetIndex: number) => {
    set((state) => ({ gameStatus: getNewGameStatus(state, cellTargetIndex) }));
    set((state) => ({ isPlayerOneTurn: !state.isPlayerOneTurn }));
  },

  getGameCell: (index: number) => get().gameStatus[index],

  isPlayerOneTurn: true,

  areBothPlayersIn: false,
  setAreBothPlayersIn: (areBothPlayersIn: boolean) => set({ areBothPlayersIn }),
}));

export default gameStore;
