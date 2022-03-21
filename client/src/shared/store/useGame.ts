import create from "zustand";

enum gameChars {
  playerOne = "X",
  playerTwo = "O",
  empty = "",
}

interface GameState {
  roomCode: string;
  setRoomCode: (roomCode: string) => void;

  gameStatus: gameChars[];
  setGameStatus: (index: number) => void;

  getGameCell: (index: number) => gameChars;

  isPlayerOneTurn: boolean;
}

const useGame = create<GameState>((set, get) => ({
  roomCode: "",
  setRoomCode: (roomCode: string) => set(() => ({ roomCode })),

  gameStatus: Array(24).fill(gameChars.empty),
  setGameStatus: (cellTargetIndex: number) => {
    set((state) => ({ gameStatus: getNewGameStatus(state, cellTargetIndex) }));

    set((state) => ({ isPlayerOneTurn: !state.isPlayerOneTurn }));
  },

  getGameCell: (index: number) => {
    return get().gameStatus[index];
  },

  isPlayerOneTurn: true,
}));

export default useGame;

function getNewGameStatus(
  state: GameState,
  cellTargetIndex: number
): gameChars[] {
  return state.gameStatus.map((cell, index) => {
    return index === cellTargetIndex
      ? state.isPlayerOneTurn
        ? gameChars.playerOne
        : gameChars.playerTwo
      : cell;
  });
}
