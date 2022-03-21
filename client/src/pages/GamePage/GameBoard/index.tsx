import { useState } from "react";
import Cell from "../Cell";
import { GameBoardContainer } from "./GameBoard.styled";

const GameBoard = () => {
  const [isPlayerOneTurn, setIsPlayerOneTurn] = useState(true);
  const [gameStatus, setGameStatus] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  return (
    <GameBoardContainer>
      {[...Array(9)].map((_, index) => (
        <Cell
          key={index}
          index={index}
          gameStatus={gameStatus}
          setGameStatus={setGameStatus}
          isPlayerOneTurn={isPlayerOneTurn}
          setIsPlayerOneTurn={setIsPlayerOneTurn}
        />
      ))}
    </GameBoardContainer>
  );
};

export default GameBoard;
