import { motion } from "framer-motion";
import styled from "styled-components";

export const GameBoardContainer = styled(motion.main)`
  margin: auto;
  background-color: var(--accent-color);

  height: 300px;
  width: 300px;

  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  grid-gap: 3px;
`;
