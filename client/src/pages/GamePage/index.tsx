import PrivateRoute from "../../shared/components/navigation/PrivateRoute";

const GamePage = () => {
  return (
    <PrivateRoute>
      <div>GamePage</div>
    </PrivateRoute>
  );
};

export default GamePage;
