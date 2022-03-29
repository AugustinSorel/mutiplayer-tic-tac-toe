import gameStore from "../../shared/store/GameSore";

const useStartGame = () => {
  const setAreBothPlayersIn = gameStore((state) => state.setAreBothPlayersIn);

  const startGameHandler = () => {
    console.log("game can start");
    setAreBothPlayersIn(true);
  };

  return startGameHandler;
};

export default useStartGame;
