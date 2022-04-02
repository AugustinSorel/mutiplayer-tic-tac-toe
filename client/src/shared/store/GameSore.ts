import create from "zustand";
import gameChars from "../../game/utils/gameChars";
import GameState from "../../game/utils/GameState";

const gameStore = create<GameState>((set, get) => ({
  gameStatus: Array(9).fill(gameChars.empty),
  setGameStatus: (newGameStatus: gameChars[]) => {
    set({ gameStatus: newGameStatus });
    set((state) => ({ isPlayerTurn: !state.isPlayerTurn }));
  },

  getGameCell: (index: number) => get().gameStatus[index],

  isPlayerTurn: true,
  setIsPlayerTurn: (isPlayerTurn: boolean) =>
    set({ isPlayerTurn: isPlayerTurn }),

  isPlayerPlayerOne: true,
  setIsPlayerPlayerOne: (isPlayerPlayerOne: boolean) =>
    set({ isPlayerPlayerOne }),

  areBothPlayersIn: false,
  setAreBothPlayersIn: (areBothPlayersIn: boolean) => set({ areBothPlayersIn }),
}));

export default gameStore;
