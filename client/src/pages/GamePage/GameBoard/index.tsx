import Cell from "../Cell";
import { GameBoardContainer } from "./GameBoard.styled";

const GameBoard = () => {
  return (
    <GameBoardContainer>
      {[...Array(9)].map((_, index) => (
        <Cell key={index} index={index} />
      ))}
    </GameBoardContainer>
  );
};

export default GameBoard;
