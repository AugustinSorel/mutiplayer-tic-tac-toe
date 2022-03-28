import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import NotificationModal from "../../../shared/components/modals/NotificationModal";

interface Props {
  showClipBoardModal: boolean;
  setShowClipBoardModal: (value: boolean) => void;
}

const RoomCodeModals: FC<Props> = ({
  showClipBoardModal,
  setShowClipBoardModal,
}) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showClipBoardModal && (
        <NotificationModal
          closeHandler={() => setShowClipBoardModal(false)}
          text="Copied to clipboard!"
        />
      )}
    </AnimatePresence>
  );
};

export default RoomCodeModals;
