import { motion } from "framer-motion";
import styled from "styled-components";

export const LoaderWrapper = styled(motion.main)`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto;
`;

export const LoaderCircle = styled(motion.div)`
  position: absolute;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: 0.8rem solid;
  border-color: var(--text-color);
`;

export const LoaderText = styled(motion.h2)`
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-regular);
  text-align: center;
  margin-top: 15rem;
`;
