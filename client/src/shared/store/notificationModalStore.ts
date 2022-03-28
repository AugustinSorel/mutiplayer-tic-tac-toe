import zustand from "zustand";

interface notificationModalInterface {
  text: string;

  isNotificationModalOpen: boolean;

  openNotificationModal: (text: string) => void;
  closeNotificationModal: () => void;
}

const notificationModalStore = zustand<notificationModalInterface>((set) => ({
  text: "",

  isNotificationModalOpen: false,

  openNotificationModal: (text: string) => {
    set({ isNotificationModalOpen: true });
    set({ text });
  },
  closeNotificationModal: () => set({ isNotificationModalOpen: false }),
}));

export default notificationModalStore;
