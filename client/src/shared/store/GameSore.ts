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

  isGameOver: false,
  setIsGameOver: (gameStatus: gameChars[]) => {
    let winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let winCondition of winningConditions) {
      if (winCondition.every((w) => gameStatus[w] === gameChars.playerOne)) {
        console.log("Player One Wins!");
        return "X";
      }
      if (winCondition.every((w) => gameStatus[w] === gameChars.playerTwo)) {
        console.log("Player Two Wins!");
        return "O";
      }
    }
    return "";
  },
}));

export default gameStore;
