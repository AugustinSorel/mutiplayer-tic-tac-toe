import useNotificationModal from "../../shared/hooks/useNotificationModal";
import gameStore from "../../shared/store/GameSore";

const useOpponentLeft = () => {
  const { openNotificationModal } = useNotificationModal();
  const setAreBothPlayersIn = gameStore((state) => state.setAreBothPlayersIn);

  const oppentLeftHandler = () => {
    openNotificationModal("Your opponent left the game 😥");
    setAreBothPlayersIn(false);
  };

  return oppentLeftHandler;
};

export default useOpponentLeft;
