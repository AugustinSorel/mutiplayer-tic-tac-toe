import TransitionElements from "../../shared/components/formElements/transitionElements";
import Header from "../../shared/components/navigation/Header";
import RoomCodeModals from "./RoomCodeModals";
import RoomCodePageBody from "./RoomCodePageBody";

const RoomCodePage = () => {
  return (
    <>
      <RoomCodeModals />

      <TransitionElements />

      <Header title="Please enter a room code" />

      <RoomCodePageBody />
    </>
  );
};

export default RoomCodePage;
