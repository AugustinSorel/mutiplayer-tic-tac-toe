import { FC, useEffect, useState } from "react";
import labelVariants from "../../../framer-motion/labelVariants";
import { InputContainer, InputStyle, Label } from "./Input.styled";

interface Props {
  type: string;
  title: string;
  value: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = ({ type, title, value, onChangeHandler }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const onTapStart = () => {
    setIsInputFocused(true);
  };

  const onBlur = () => {
    setIsInputFocused(!!value);
  };

  const getLabelAnimate = () => {
    return isInputFocused ? "moveToTop" : "moveBack";
  };

  useEffect(() => {
    if (value) {
      setIsInputFocused(true);
    }
  }, []);

  return (
    <InputContainer>
      <InputStyle
        type={type}
        onTapStart={onTapStart}
        onBlur={onBlur}
        onChange={onChangeHandler}
        value={value}
      />
      <Label animate={getLabelAnimate()} variants={labelVariants}>
        {title}
      </Label>
    </InputContainer>
  );
};

export default Input;
