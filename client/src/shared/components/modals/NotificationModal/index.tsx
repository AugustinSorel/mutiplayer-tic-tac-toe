import { FC } from "react";
import SvgIcon from "../../formElements/SvgIcon";
import {
  NotificationModalContainer,
  NotificationModalText,
} from "./NotificationModal.styled";
import SvgPaths from "../../../utils/SvgPaths";

interface Props {}

const NotificationModal: FC<Props> = () => {
  return (
    <NotificationModalContainer>
      <NotificationModalText>Hello World</NotificationModalText>
      <SvgIcon
        path={SvgPaths.close}
        clickHandler={() => null}
        size="small"
        inverted
      />
    </NotificationModalContainer>
  );
};

export default NotificationModal;
