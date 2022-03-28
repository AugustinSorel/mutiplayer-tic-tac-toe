import SvgIcon from "../../formElements/SvgIcon";
import {
  NotificationModalContainer,
  NotificationModalText,
} from "./NotificationModal.styled";
import SvgPaths from "../../../utils/SvgPaths";
import useNotificationModal from "../../../hooks/useNotificationModal";
import useAutomaticCloseModal from "./useAutomaticCloseModal";

const NotificationModal = () => {
  const { text, closeNotificationModal } = useNotificationModal();

  useAutomaticCloseModal();

  return (
    <NotificationModalContainer
      initial={{ y: "-200%" }}
      animate={{ y: 0 }}
      exit={{ y: "-200%" }}
    >
      <NotificationModalText>{text}</NotificationModalText>
      <SvgIcon
        path={SvgPaths.close}
        clickHandler={closeNotificationModal}
        size="small"
      />
    </NotificationModalContainer>
  );
};

export default NotificationModal;
