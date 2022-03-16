import { useState } from "react";
import { InputContainer, InputStyle, Label } from "./Input.styled";

const variantsLabel = {
  moveToTop: {
    x: -22,
    y: -30,
    scale: 0.7,
  },
  moveBack: { x: 0, y: 0, scale: 1 },
};
const Input = () => {
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

  return (
    <InputContainer>
      <InputStyle
        type={"text"}
        onTap={onTapStart}
        onBlur={onBlur}
        onChange={onChangeHandler}
      />
      <Label
        animate={isInputFocused ? "moveToTop" : "moveBack"}
        variants={variantsLabel}
      >
        game room
      </Label>
    </InputContainer>
  );
};

export default Input;
