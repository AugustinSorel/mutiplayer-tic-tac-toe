import useClipBoardModal from "../../../shared/hooks/useClipBoardModal";

const useCopyRoomIdToClipboard = () => {
  const { openClipBoardModal } = useClipBoardModal();

  const copyRoomIdToClipboard = (roomCode: string) => {
    navigator.clipboard.writeText(`${window.location.href}game/${roomCode}`);
    openClipBoardModal();
  };

  return copyRoomIdToClipboard;
};

export default useCopyRoomIdToClipboard;
