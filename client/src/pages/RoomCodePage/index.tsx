import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../shared/components/formElements/Button";
import Input from "../../shared/components/formElements/Input";
import TransitionElements from "../../shared/components/formElements/transitionElements";
import Header from "../../shared/components/navigation/Header";
import useGame from "../../shared/store/useGame";
import { RoomCodePageContainer } from "./RoomCodePage.styled";

const RoomCodePage = () => {
  const roomCode = useGame((state) => state.roomCode);
  const setRoomCode = useGame((state) => state.setRoomCode);
  const socket = useGame((state) => state.socket);

  const navigate = useNavigate();

  useEffect(() => {
    socket.on("roomJoined", () => {
      console.log("roomJoined");
      // navigate(`/game/${roomCode}`);
    });

    socket.on("joinRoomError", ({ errorMessage }) => {
      console.log(errorMessage);
    });
  }, [socket]);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRoomCode(event.target.value);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!roomCode) {
      return;
    }

    socket.emit("joinRoom", roomCode);
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
