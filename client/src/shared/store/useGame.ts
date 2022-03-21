import create from "zustand";

type gameChars = "X" | "O" | "";

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
  setRoomCode: (roomCode: string) => set((state) => ({ ...state, roomCode })),

  gameStatus: ["", "", "", "", "", "", "", "", ""],
  setGameStatus: (index: number) => {
    set((state) => {
      const newGameStatus = [...state.gameStatus];
      newGameStatus[index] = state.isPlayerOneTurn ? "X" : "O";

      return { ...state, gameStatus: newGameStatus };
    });

    set((state) => ({ isPlayerOneTurn: !state.isPlayerOneTurn }));
  },

  getGameCell: (index: number) => {
    return get().gameStatus[index];
  },

  isPlayerOneTurn: true,
}));

export default useGame;
