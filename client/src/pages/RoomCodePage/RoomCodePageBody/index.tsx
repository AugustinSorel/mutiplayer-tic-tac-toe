import { useState } from "react";
import Button from "../../../shared/components/formElements/Button";
import Input from "../../../shared/components/formElements/Input";
import SvgIcon from "../../../shared/components/formElements/SvgIcon";
import SvpPaths from "../../../shared/utils/SvgPaths";
import {
  RoomCodePageContainer,
  RoomIdContainer,
} from "./RoomCodePageBody.styled";
import useCopyRoomIdToClipboard from "./useCopyRoomIdToClipboard";
import useNavigateToGamePage from "./useNavigateToGamePage";

const RoomCodePageBody = () => {
  const [roomId, setRoomId] = useState("");
  const copyRoomIdToClipboard = useCopyRoomIdToClipboard();
  const navigateToGamePage = useNavigateToGamePage();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomId(event.target.value);
  };

  const clickHandler = () => {
    copyRoomIdToClipboard(roomId);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    navigateToGamePage(e, roomId);
  };

  return (
    <RoomCodePageContainer onSubmit={submitHandler}>
      <RoomIdContainer>
        <Input
          title="game room"
          type="text"
          value={roomId}
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
