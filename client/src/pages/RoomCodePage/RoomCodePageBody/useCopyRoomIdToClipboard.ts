import useNotificationModal from "../../../shared/hooks/useNotificationModal";

const useCopyRoomIdToClipboard = () => {
  const { openNotificationModal } = useNotificationModal();

  const copyRoomIdToClipboard = (roomCode: string) => {
    navigator.clipboard.writeText(`${window.location.href}game/${roomCode}`);
    openNotificationModal("Copied to clipboard! 📋");
  };

  return copyRoomIdToClipboard;
};

export default useCopyRoomIdToClipboard;
