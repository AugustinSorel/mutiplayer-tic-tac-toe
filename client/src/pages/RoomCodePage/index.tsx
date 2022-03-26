import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/components/formElements/Button";
import Input from "../../shared/components/formElements/Input";
import TransitionElements from "../../shared/components/formElements/transitionElements";
import Header from "../../shared/components/navigation/Header";
import { RoomCodePageContainer } from "./RoomCodePage.styled";

const RoomCodePage = () => {
  const [roomCode, setRoomCode] = useState("");

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

  return (
    <>
      <TransitionElements />

      <Header title="Please enter a room code" />

      <RoomCodePageContainer onSubmit={submitHandler}>
        <Input
          title="game room"
          type="text"
          value={roomCode}
          onChangeHandler={onChangeHandler}
        />
        <Button title="play" />
      </RoomCodePageContainer>
    </>
  );
};

export default RoomCodePage;
