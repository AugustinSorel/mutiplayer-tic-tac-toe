import { motion } from "framer-motion";
import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 80%;
  max-width: 400px;
  border-bottom: var(--border-height) solid var(--accent-color);
`;

export const InputStyle = styled(motion.input)`
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-regular);
  color: var(--text-color);
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
`;

export const Label = styled(motion.label)`
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-light);
  position: absolute;
  left: 0;
  bottom: 10px;
  line-height: 18px;
  pointer-events: none;
  text-transform: capitalize;
`;
