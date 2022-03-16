import { FC, useState } from "react";
import labelVariants from "../../../framer-motion/labelVariants";
import { InputContainer, InputStyle, Label } from "./Input.styled";

interface Props {
  type: string;
  title: string;
}

const Input: FC<Props> = ({ type, title }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onTapStart = () => {
    setIsInputFocused(true);
  };

  const onBlur = () => {
    setIsInputFocused(!(inputValue === ""));
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const getLabelAnimate = () => {
    return isInputFocused ? "moveToTop" : "moveBack";
  };

  return (
    <InputContainer>
      <InputStyle
        type={type}
        onTapStart={onTapStart}
        onBlur={onBlur}
        onChange={onChangeHandler}
      />
      <Label animate={getLabelAnimate()} variants={labelVariants}>
        {title}
      </Label>
    </InputContainer>
  );
};

export default Input;
