import { TapInfo, useCycle } from "framer-motion";
import { useState } from "react";
import { InputContainer, InputStyle, Label, Underline } from "./Input.styled";

const variantsLabel = {
  active: {
    x: -15,
    y: -20,
    scale: 0.7,
  },
  inactive: { x: 0, y: 0, scale: 1 },
};

const motionLabel = (state: string) => {
  return {
    animate: state,
    variants: variantsLabel,
  };
};

const Input = () => {
  const [focus, cycleFocus] = useCycle("inactive", "active");
  const [blur, cycleBlur] = useCycle("inactive", "active");

  const [value, setValue] = useState("");

  const onTapStart = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: TapInfo
  ) => {
    focus === "inactive" && cycleFocus();
    return blur === "inactive" && cycleBlur();
  };

  const onBlur = () => {
    value === "" && cycleFocus();
    cycleBlur();
  };

  return (
    <InputContainer>
      <InputStyle type={"text"} onTap={onTapStart} onBlur={onBlur} />
      <Label {...motionLabel(focus)}>Hello World</Label>
      <Underline />
    </InputContainer>
  );
};

export default Input;
