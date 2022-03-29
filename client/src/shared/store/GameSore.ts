import create from "zustand";
import getNewGameStatus from "../../game/services/getNewGameStatus";
import gameChars from "../../game/utils/gameChars";
import GameState from "../../game/utils/GameState";

const gameStore = create<GameState>((set, get) => ({
  gameStatus: Array(24).fill(gameChars.empty),
  setGameStatus: (cellTargetIndex: number) => {
    set((state) => ({ gameStatus: getNewGameStatus(state, cellTargetIndex) }));
    set((state) => ({ isPlayerOneTurn: !state.isPlayerOneTurn }));
  },

  getGameCell: (index: number) => get().gameStatus[index],

  isPlayerOneTurn: true,
  setIsPlayerOneTurn: (isPlayerOneTurn: boolean) => set({ isPlayerOneTurn }),

  areBothPlayersIn: false,
  setAreBothPlayersIn: (areBothPlayersIn: boolean) => set({ areBothPlayersIn }),
}));

export default gameStore;
