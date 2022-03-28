import Cell from "../Cell";
import { GameBoardContainer } from "./GameBoard.styled";

const GameBoard = () => {
  return (
    <GameBoardContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {[...Array(9)].map((_, index) => (
        <Cell key={index} index={index} />
      ))}
    </GameBoardContainer>
  );
};

export default GameBoard;
