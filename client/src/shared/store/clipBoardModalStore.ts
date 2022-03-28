import zustand from "zustand";

interface ClipBoardModalInterface {
  isClipBoardModalOpen: boolean;
  openClipBoardModal: () => void;
  closeClipBoardModal: () => void;
}

const clipBoardModalStore = zustand<ClipBoardModalInterface>((set) => ({
  isClipBoardModalOpen: false,
  openClipBoardModal: () => set({ isClipBoardModalOpen: true }),
  closeClipBoardModal: () => set({ isClipBoardModalOpen: false }),
}));

export default clipBoardModalStore;
