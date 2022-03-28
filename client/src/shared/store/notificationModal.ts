import zustand from "zustand";

interface NotificationModalInterface {
  isNotificationModalOpen: boolean;

  openNotificationModal: () => void;
  closeNotificationModal: () => void;
}

const notificationModalStore = zustand<NotificationModalInterface>((set) => ({
  isNotificationModalOpen: false,

  openNotificationModal: () => set({ isNotificationModalOpen: true }),
  closeNotificationModal: () => set({ isNotificationModalOpen: false }),
}));

export default notificationModalStore;
