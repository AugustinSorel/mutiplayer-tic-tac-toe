import { useNavigate } from "react-router-dom";

const useNavigateToGamePage = () => {
  const navigate = useNavigate();

  const navigateToGamePage = (
    e: React.FormEvent<HTMLFormElement>,
    roomId: string
  ) => {
    e.preventDefault();

    if (!roomId) {
      return;
    }

    navigate(`/game/${roomId}`);
  };

  return navigateToGamePage;
};

export default useNavigateToGamePage;
