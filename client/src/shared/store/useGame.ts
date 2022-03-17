import create from "zustand";

interface GameState {
  roomCode: string;
  setRoomCode: (roomCode: string) => void;
}

const useGame = create<GameState>((set) => ({
  roomCode: "",
  setRoomCode: (roomCode: string) => set((state) => ({ ...state, roomCode })),
}));

export default useGame;
