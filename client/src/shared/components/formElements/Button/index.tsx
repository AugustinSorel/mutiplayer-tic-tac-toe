import { FC } from "react";
import { scaleDown, scaleUp } from "../../../framer-motion/whileVariants";
import { ButtonStyle } from "./Button.styled";

interface Props {
  title: string;
}

const Button: FC<Props> = ({ title }) => {
  return (
    <ButtonStyle whileHover={{ ...scaleUp }} whileTap={{ ...scaleDown }}>
      {title}
    </ButtonStyle>
  );
};

export default Button;
