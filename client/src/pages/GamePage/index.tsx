import Header from "../../shared/components/navigation/Header";
import PrivateRoute from "../../shared/components/navigation/PrivateRoute";
import theme from "../../shared/styles/theme";
import { GameCell, GameContainer } from "./GamePage.styled";

const GamePage = () => {
  return (
    <PrivateRoute>
      <Header title="Game page" />

      <GameContainer
        initial={{ y: "200%" }}
        animate={{ y: 0 }}
        exit={{ y: "200%" }}
      >
        {[...Array(9)].map((_, index) => (
          <GameCell
            key={index}
            whileHover={{ backgroundColor: theme.colors.accentColor }}
          />
        ))}
      </GameContainer>
    </PrivateRoute>
  );
};

export default GamePage;
