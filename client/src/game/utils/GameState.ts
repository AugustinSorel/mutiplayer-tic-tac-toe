import gameChars from "./gameChars";

interface GameState {
  gameStatus: gameChars[];
  setGameStatus: (newGameStatus: gameChars[]) => void;

  getGameCell: (index: number) => gameChars;

  isPlayerTurn: boolean;
  setIsPlayerTurn: (isPlayerOneTurn: boolean) => void;

  isPlayerPlayerOne: boolean;
  setIsPlayerPlayerOne: (isPlayerPlayerOne: boolean) => void;

  areBothPlayersIn: boolean;
  setAreBothPlayersIn: (areBothPlayersIn: boolean) => void;

  isGameOver: boolean;
  setIsGameOver: (gameStatus: gameChars[]) => void;
}

export default GameState;
