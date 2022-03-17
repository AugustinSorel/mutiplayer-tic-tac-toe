import Button from "../../shared/components/formElements/Button";
import Input from "../../shared/components/formElements/Input";
import Header from "../../shared/components/navigation/Header";
import { RoomCodePageContainer } from "./RoomCodePage.styled";

const RoomCodePage = () => {
  return (
    <>
      <Header title="Please enter a room code" />

      <RoomCodePageContainer>
        <Input title="game room" type="text" />
        <Button title="play" />
      </RoomCodePageContainer>
    </>
  );
};

export default RoomCodePage;
