import { motion } from "framer-motion";
import styled from "styled-components";

interface Props {
  index: number;
}

export const BoxTransition = styled(motion.div)<Props>`
  height: calc(100vh / 5);
  background-color: var(--accent-background-color);
  position: absolute;
  top: ${({ index }) => `${index * 20}%`};
  z-index: 2;
`;
