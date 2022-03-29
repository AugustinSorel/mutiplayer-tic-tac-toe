import { useState } from "react";
import useGame from "../../game/services/useGame";
import TransitionElements from "../../shared/components/formElements/transitionElements";
import Header from "../../shared/components/navigation/Header";
import GamePageBody from "./GamePageBody";
import GamePageModals from "./GamePageModals";

const GamePage = () => {
  const [bothPlayersJoined, setBothPlayersJoined] = useState(false);

  useGame();

  return (
    <>
      <GamePageModals />

      <TransitionElements />

      <Header title="Game page" />

      <GamePageBody bothPlayersJoined={bothPlayersJoined} />
    </>
  );
};

export default GamePage;
