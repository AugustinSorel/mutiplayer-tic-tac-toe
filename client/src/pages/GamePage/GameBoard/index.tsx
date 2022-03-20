import Cell from "../Cell";
import { GameBoardContainer } from "./GameBoard.styled";

const GameBoard = () => {
  return (
    <GameBoardContainer
      initial={{ y: "200%" }}
      animate={{ y: 0 }}
      exit={{ y: "200%" }}
    >
      {[...Array(9)].map((_, index) => (
        <Cell key={index} />
      ))}
    </GameBoardContainer>
  );
};

export default GameBoard;
