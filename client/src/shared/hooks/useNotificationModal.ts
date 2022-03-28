import notificationModalStore from "../store/notificationModalStore";

const useNotificationModal = () => {
  const text = notificationModalStore((state) => state.text);

  const closeNotificationModal = notificationModalStore(
    (state) => state.closeNotificationModal
  );

  const openNotificationModal = notificationModalStore(
    (state) => state.openNotificationModal
  );

  const isNotificationModalOpen = notificationModalStore(
    (state) => state.isNotificationModalOpen
  );

  return {
    text,
    isNotificationModalOpen,
    closeNotificationModal,
    openNotificationModal,
  };
};

export default useNotificationModal;
