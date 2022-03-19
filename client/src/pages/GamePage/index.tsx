import Header from "../../shared/components/navigation/Header";
import PrivateRoute from "../../shared/components/navigation/PrivateRoute";

const GamePage = () => {
  return (
    <PrivateRoute>
      <Header title="Game page" />
    </PrivateRoute>
  );
};

export default GamePage;
