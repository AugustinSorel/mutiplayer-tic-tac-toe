import { useNavigate } from "react-router-dom";
import useNotificationModal from "../../../shared/hooks/useNotificationModal";

const useNavigateToGamePage = () => {
  const navigate = useNavigate();
  const { openNotificationModal } = useNotificationModal();

  const navigateToGamePage = (
    e: React.FormEvent<HTMLFormElement>,
    roomId: string
  ) => {
    e.preventDefault();

    if (!roomId) {
      openNotificationModal("Room code is required! 🙄");
      return;
    }

    navigate(`/game/${roomId}`);
  };

  return navigateToGamePage;
};

export default useNavigateToGamePage;
