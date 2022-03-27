import { FC } from "react";
import { scaleDown, scaleUp } from "../../../framer-motion/whileVariants";
import { SvgIconStyle } from "./SvgIcon.styled";

interface Props {
  path: string;
  clickHandler: () => void;
}

const SvgIcon: FC<Props> = ({ path, clickHandler }) => {
  return (
    <SvgIconStyle
      onClick={clickHandler}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      whileHover={{ ...scaleUp }}
      whileTap={{ ...scaleDown }}
    >
      <path d={path} />
    </SvgIconStyle>
  );
};

export default SvgIcon;
