import { Socket } from "socket.io-client";
import gameChars from "./gameChars";

interface GameState {
  socket: Socket;

  gameStatus: gameChars[];
  setGameStatus: (index: number) => void;

  getGameCell: (index: number) => gameChars;

  isPlayerOneTurn: boolean;
}

export default GameState;
