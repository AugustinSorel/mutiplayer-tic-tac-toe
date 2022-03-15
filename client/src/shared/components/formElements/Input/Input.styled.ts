import { motion } from "framer-motion";
import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 80%;
  padding: 18px;
  padding-bottom: 30px;
  border-bottom: 1px solid #2f528f;
`;

export const InputStyle = styled(motion.input)`
  background: transparent;
  /* background: blue; */
  position: absolute;
  left: 0;
  top: 50%;
  color: var(--text-color);
  border: none;
  outline: none;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #fff;
  }
`;

export const Label = styled(motion.span)`
  align-self: center;
  position: absolute;
  left: 0;
  top: 50%;
  grid-area: input;
  font-family: Montserrat;
  font-size: 18px;
  line-height: 18px;
  text-align: left;
  pointer-events: none;
  font-weight: normal;
  /* background: green; */
`;

export const Underline = styled.div`
  position: absolute;
  background-color: #2f528f;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
`;
