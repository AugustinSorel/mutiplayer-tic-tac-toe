import { motion } from "framer-motion";
import styled from "styled-components";

export const ButtonStyle = styled(motion.button)`
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-regular);
  color: var(--text-color);
  border-radius: var(--border-radius);
  border: none;
  padding: 0.5rem 4rem;
  background-color: var(--accent-background-color);
  cursor: pointer;
  user-select: none;
`;
