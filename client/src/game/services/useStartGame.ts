import gameStore from "../../shared/store/GameSore";

const useStartGame = () => {
  const setAreBothPlayersIn = gameStore((state) => state.setAreBothPlayersIn);
  const setIsPlayerOneTurn = gameStore((state) => state.setIsPlayerOneTurn);

  const startGameHandler = (isPlayerOne: boolean) => {
    console.log("game can start");
    setAreBothPlayersIn(true);
    setIsPlayerOneTurn(isPlayerOne);
    console.log("isPlayerOneTurn:", isPlayerOne);
  };

  return startGameHandler;
};

export default useStartGame;
