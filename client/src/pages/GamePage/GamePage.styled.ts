import { motion } from "framer-motion";
import styled from "styled-components";

export const GameContainer = styled(motion.main)`
  margin: auto;
  background-color: var(--accent-color);

  display: grid;
  grid-template: repeat(3, 100px) / repeat(3, 100px);
  grid-gap: 10px;
`;

export const GameCell = styled(motion.div)`
  background-color: var(--background-color);
  height: 100%;
  width: 100%;
  cursor: pointer;
`;
