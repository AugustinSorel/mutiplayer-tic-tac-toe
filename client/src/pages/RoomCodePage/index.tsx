import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../shared/components/formElements/Button";
import Input from "../../shared/components/formElements/Input";
import SvgIcon from "../../shared/components/formElements/SvgIcon";
import TransitionElements from "../../shared/components/formElements/transitionElements";
import NotificationModal from "../../shared/components/modals/NotificationModal";
import Header from "../../shared/components/navigation/Header";
import SvpPaths from "../../shared/utils/SvgPaths";
import { RoomCodePageContainer, RoomIdContainer } from "./RoomCodePage.styled";

const RoomCodePage = () => {
  const [roomCode, setRoomCode] = useState("");
  const [showClipBoardModal, setShowClipBoardModal] = useState(false);

  const navigate = useNavigate();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomCode(event.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!roomCode) {
      return;
    }

    navigate(`/game/${roomCode}`);
  };

  const clickHandler = () => {
    navigator.clipboard.writeText(`${window.location.href}game/${roomCode}`);
    setShowClipBoardModal(true);
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {showClipBoardModal && (
          <NotificationModal
            closeHandler={() => setShowClipBoardModal(false)}
            text="Copied to clipboard!"
          />
        )}
      </AnimatePresence>

      <TransitionElements />

      <Header title="Please enter a room code" />

      <RoomCodePageContainer onSubmit={submitHandler}>
        <RoomIdContainer>
          <Input
            title="game room"
            type="text"
            value={roomCode}
            onChangeHandler={onChangeHandler}
          />

          <SvgIcon
            path={SvpPaths.share}
            clickHandler={clickHandler}
            size="large"
          />
        </RoomIdContainer>
        <Button title="play" />
      </RoomCodePageContainer>
    </>
  );
};

export default RoomCodePage;
