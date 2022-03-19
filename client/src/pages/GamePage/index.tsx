import PrivateRoute from "../../shared/components/navigation/PrivateRoute";
import TransitionWrapper from "../../shared/components/navigation/TransitionWrapper";

const GamePage = () => {
  return (
    <PrivateRoute>
      <TransitionWrapper>
        <div>GamePage</div>
      </TransitionWrapper>
    </PrivateRoute>
  );
};

export default GamePage;
