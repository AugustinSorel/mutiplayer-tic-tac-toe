import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import Loader from "../../../shared/components/UIElements/Loader";
import GameBoard from "../GameBoard";

interface Props {
  bothPlayersJoined: boolean;
}

const GamePageBody: FC<Props> = ({ bothPlayersJoined }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {bothPlayersJoined ? (
        <GameBoard />
      ) : (
        <Loader text="Waiting for your friend🥳" />
      )}
    </AnimatePresence>
  );
};

export default GamePageBody;
