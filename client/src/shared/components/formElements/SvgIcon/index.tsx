import { FC } from "react";
import { scaleDown, scaleUp } from "../../../framer-motion/whileVariants";
import { SvgIconContainer, SvgIconStyle } from "./SvgIcon.styled";

interface Props {
  path: string;
  clickHandler: () => void;
  size: "small" | "medium" | "large";
  inverted?: boolean;
}

const SvgIcon: FC<Props> = ({ path, clickHandler, size, inverted }) => {
  const getSize = () => {
    switch (size) {
      case "small":
        return 10;
      case "medium":
        return 20;
      case "large":
        return 30;
      default:
        return 30;
    }
  };

  return (
    <SvgIconContainer
      whileHover={{ ...scaleUp }}
      whileTap={{ ...scaleDown }}
      inverted={inverted ? 1 : 0}
    >
      <SvgIconStyle
        onClick={clickHandler}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        size={getSize()}
      >
        <path d={path} />
      </SvgIconStyle>
    </SvgIconContainer>
  );
};

export default SvgIcon;
