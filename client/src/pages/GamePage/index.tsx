import Header from "../../shared/components/navigation/Header";
import PrivateRoute from "../../shared/components/navigation/PrivateRoute";
import GameBoard from "./GameBoard";

const GamePage = () => {
  return (
    <PrivateRoute>
      <Header title="Game page" />

      <GameBoard />
    </PrivateRoute>
  );
};

export default GamePage;
