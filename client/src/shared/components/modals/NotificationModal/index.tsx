import { FC, useEffect } from "react";
import SvgIcon from "../../formElements/SvgIcon";
import {
  NotificationModalContainer,
  NotificationModalText,
} from "./NotificationModal.styled";
import SvgPaths from "../../../utils/SvgPaths";

interface Props {
  closeHandler: () => void;
  text: string;
}

const NotificationModal: FC<Props> = ({ closeHandler, text }) => {
  useEffect(() => {
    setTimeout(() => {
      closeHandler();
    }, 1000);
  }, []);

  return (
    <NotificationModalContainer
      initial={{ y: "-200%" }}
      animate={{ y: 0 }}
      exit={{ y: "-200%" }}
    >
      <NotificationModalText>{text}</NotificationModalText>
      <SvgIcon path={SvgPaths.close} clickHandler={closeHandler} size="small" />
    </NotificationModalContainer>
  );
};

export default NotificationModal;
