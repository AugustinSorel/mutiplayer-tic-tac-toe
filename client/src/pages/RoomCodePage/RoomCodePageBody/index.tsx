import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../shared/components/formElements/Button";
import Input from "../../../shared/components/formElements/Input";
import SvgIcon from "../../../shared/components/formElements/SvgIcon";
import useClipBoardModal from "../../../shared/hooks/useClipBoardModal";
import SvpPaths from "../../../shared/utils/SvgPaths";
import {
  RoomCodePageContainer,
  RoomIdContainer,
} from "./RoomCodePageBody.styled";

const RoomCodePageBody = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  const { openClipBoardModal } = useClipBoardModal();

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
    openClipBoardModal();
  };

  return (
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
  );
};

export default RoomCodePageBody;
