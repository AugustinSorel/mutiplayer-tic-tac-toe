import TransitionElements from "../../shared/components/formElements/transitionElements";
import Header from "../../shared/components/navigation/Header";
import PrivateRoute from "../../shared/components/navigation/PrivateRoute";
import useGame from "../../shared/store/useGame";
import GameBoard from "./GameBoard";

const GamePage = () => {
  const bothPlayersJoined = useGame((state) => state.bothPlayersJoined);

  return (
    <PrivateRoute>
      <TransitionElements />

      <Header title="Game page" />

      {bothPlayersJoined ? (
        <GameBoard />
      ) : (
        <div>Waiting for both players to join</div>
      )}
    </PrivateRoute>
  );
};

export default GamePage;
