import notificationModalStore from "../store/notificationModal";

const useClipBoardModal = () => {
  const closeClipBoardModal = notificationModalStore(
    (state) => state.closeNotificationModal
  );

  const openClipBoardModal = notificationModalStore(
    (state) => state.openNotificationModal
  );

  const isClipBoardModalOpen = notificationModalStore(
    (state) => state.isNotificationModalOpen
  );

  return { isClipBoardModalOpen, closeClipBoardModal, openClipBoardModal };
};

export default useClipBoardModal;
