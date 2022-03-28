import { AnimatePresence } from "framer-motion";
import NotificationModal from "../../../shared/components/modals/NotificationModal";
import useClipBoardModal from "../../../shared/hooks/useClipBoardModal";

const RoomCodeModals = () => {
  const { isClipBoardModalOpen, closeClipBoardModal } = useClipBoardModal();
  return (
    <AnimatePresence exitBeforeEnter>
      {isClipBoardModalOpen && (
        <NotificationModal
          closeHandler={closeClipBoardModal}
          text="Copied to clipboard!"
        />
      )}
    </AnimatePresence>
  );
};

export default RoomCodeModals;
