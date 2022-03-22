import gameChars from "../utils/gameChars";
import GameState from "../utils/GameState";

const getNewGameStatus = (
  state: GameState,
  cellTargetIndex: number
): gameChars[] => {
  return state.gameStatus.map((cell, index) =>
    index === cellTargetIndex
      ? state.isPlayerOneTurn
        ? gameChars.playerOne
        : gameChars.playerTwo
      : cell
  );
};

export default getNewGameStatus;
