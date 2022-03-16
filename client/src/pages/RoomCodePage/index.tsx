import Button from "../../shared/components/formElements/Button";
import Input from "../../shared/components/formElements/Input";
import { RoomCodePageContainer } from "./RoomCodePage.styled";

const RoomCodePage = () => {
  return (
    <RoomCodePageContainer>
      <Input title="game room" type="text" />
      <Button title="play" />
    </RoomCodePageContainer>
  );
};

export default RoomCodePage;
