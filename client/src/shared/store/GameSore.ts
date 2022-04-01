import create from "zustand";
import gameChars from "../../game/utils/gameChars";
import GameState from "../../game/utils/GameState";

const gameStore = create<GameState>((set, get) => ({
  gameStatus: Array(9).fill(gameChars.empty),
  setGameStatus: (newGameStatus: gameChars[]) => {
    set({ gameStatus: newGameStatus });
    // set((state) => ({ isPlayerOneTurn: !state.isPlayerOneTurn }));
  },

  getGameCell: (index: number) => get().gameStatus[index],

  isPlayerOneTurn: true,
  setIsPlayerOneTurn: (isPlayerOneTurn: boolean) => set({ isPlayerOneTurn }),

  areBothPlayersIn: false,
  setAreBothPlayersIn: (areBothPlayersIn: boolean) => set({ areBothPlayersIn }),
}));

export default gameStore;
