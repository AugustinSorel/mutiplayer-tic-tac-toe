import { useState } from "react";
import TransitionElements from "../../shared/components/formElements/transitionElements";
import Header from "../../shared/components/navigation/Header";
import RoomCodeModals from "./RoomCodeModals";
import RoomCodePageBody from "./RoomCodePageBody";

const RoomCodePage = () => {
  const [showClipBoardModal, setShowClipBoardModal] = useState(false);

  return (
    <>
      <RoomCodeModals
        showClipBoardModal={showClipBoardModal}
        setShowClipBoardModal={setShowClipBoardModal}
      />

      <TransitionElements />

      <Header title="Please enter a room code" />

      <RoomCodePageBody setShowClipBoardModal={setShowClipBoardModal} />
    </>
  );
};

export default RoomCodePage;
