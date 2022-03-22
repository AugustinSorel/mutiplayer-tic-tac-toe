import gameChars from "./gameChars";

interface GameState {
  roomCode: string;
  setRoomCode: (roomCode: string) => void;

  gameStatus: gameChars[];
  setGameStatus: (index: number) => void;

  getGameCell: (index: number) => gameChars;

  isPlayerOneTurn: boolean;
}

export default GameState;
