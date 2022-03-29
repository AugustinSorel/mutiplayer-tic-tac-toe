import { AnimatePresence } from "framer-motion";
import Loader from "../../../shared/components/UIElements/Loader";
import gameStore from "../../../shared/store/GameSore";
import GameBoard from "../GameBoard";

const GamePageBody = () => {
  const areBothPlayersIn = gameStore((state) => state.areBothPlayersIn);
  return (
    <AnimatePresence exitBeforeEnter>
      {areBothPlayersIn ? (
        <GameBoard />
      ) : (
        <Loader text="Waiting for your friend🥳" />
      )}
    </AnimatePresence>
  );
};

export default GamePageBody;
