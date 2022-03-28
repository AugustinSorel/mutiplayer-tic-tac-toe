import clipBoardModalStore from "../store/clipBoardModalStore";

const useClipBoardModal = () => {
  const closeClipBoardModal = clipBoardModalStore(
    (state) => state.closeClipBoardModal
  );

  const openClipBoardModal = clipBoardModalStore(
    (state) => state.openClipBoardModal
  );

  const isClipBoardModalOpen = clipBoardModalStore(
    (state) => state.isClipBoardModalOpen
  );

  return { isClipBoardModalOpen, closeClipBoardModal, openClipBoardModal };
};

export default useClipBoardModal;
