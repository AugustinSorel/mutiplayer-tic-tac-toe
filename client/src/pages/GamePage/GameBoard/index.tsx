import { FC } from "react";
import { Socket } from "socket.io-client";
import Cell from "../Cell";
import { GameBoardContainer } from "./GameBoard.styled";

interface Props {
  socket: Socket;
  roomId: string;
}

const GameBoard: FC<Props> = ({ roomId, socket }) => {
  return (
    <GameBoardContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {[...Array(9)].map((_, index) => (
        <Cell key={index} index={index} socket={socket} roomId={roomId} />
      ))}
    </GameBoardContainer>
  );
};

export default GameBoard;
