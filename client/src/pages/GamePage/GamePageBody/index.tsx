import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { Socket } from "socket.io-client";
import Loader from "../../../shared/components/UIElements/Loader";
import gameStore from "../../../shared/store/GameSore";
import GameBoard from "../GameBoard";

interface Props {
  socket: Socket;
  roomId: string;
}

const GamePageBody: FC<Props> = ({ socket, roomId }) => {
  const areBothPlayersIn = gameStore((state) => state.areBothPlayersIn);
  return (
    <AnimatePresence exitBeforeEnter>
      {areBothPlayersIn ? (
        <GameBoard socket={socket} roomId={roomId} />
      ) : (
        <Loader text="Waiting for your friend🥳" />
      )}
    </AnimatePresence>
  );
};

export default GamePageBody;
