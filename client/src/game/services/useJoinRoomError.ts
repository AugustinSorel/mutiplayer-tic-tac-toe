import useNotificationModal from "../../shared/hooks/useNotificationModal";

const useJoinRoomError = () => {
  const { openNotificationModal } = useNotificationModal();

  const joinRoomErrorHandler = (errorMessage: string) => {
    console.log(errorMessage);
    openNotificationModal(errorMessage);
  };

  return joinRoomErrorHandler;
};

export default useJoinRoomError;
