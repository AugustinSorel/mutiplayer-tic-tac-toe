import { useEffect } from "react";
import useNotificationModal from "../../../hooks/useNotificationModal";

const useAutomaticCloseModal = () => {
  const { closeNotificationModal } = useNotificationModal();
  const TIMEOUT = 2000;

  useEffect(() => {
    setTimeout(() => {
      closeNotificationModal();
    }, TIMEOUT);
  }, [closeNotificationModal]);
};

export default useAutomaticCloseModal;
