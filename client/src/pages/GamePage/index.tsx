import TransitionElements from "../../shared/components/formElements/transitionElements";
import Header from "../../shared/components/navigation/Header";
import PrivateRoute from "../../shared/components/navigation/PrivateRoute";
import GameBoard from "./GameBoard";

const GamePage = () => {
  return (
    <PrivateRoute>
      <TransitionElements />

      <Header title="Game page" />

      <GameBoard />
    </PrivateRoute>
  );
};

export default GamePage;
