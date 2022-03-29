import useGame from "../../game/services/useGame";
import TransitionElements from "../../shared/components/formElements/transitionElements";
import Header from "../../shared/components/navigation/Header";
import GamePageBody from "./GamePageBody";
import GamePageModals from "./GamePageModals";

const GamePage = () => {
  useGame();

  return (
    <>
      <GamePageModals />

      <TransitionElements />

      <Header title="Game page" />

      <GamePageBody />
    </>
  );
};

export default GamePage;
