import gameChars from "./gameChars";

interface GameState {
  gameStatus: gameChars[];
  setGameStatus: (newGameStatus: gameChars[]) => void;

  getGameCell: (index: number) => gameChars;

  isPlayerOneTurn: boolean;
  setIsPlayerOneTurn: (isPlayerOneTurn: boolean) => void;

  areBothPlayersIn: boolean;
  setAreBothPlayersIn: (areBothPlayersIn: boolean) => void;
}

export default GameState;
