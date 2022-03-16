import { FC } from "react";
import { ButtonStyle } from "./Button.styled";

interface Props {
  title: string;
}

const Button: FC<Props> = ({ title }) => {
  return (
    <ButtonStyle whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      {title}
    </ButtonStyle>
  );
};

export default Button;
