import { motion } from "framer-motion";
import styled from "styled-components";

export const LoaderContainer = styled(motion.div)`
  width: 5rem;
  height: 5rem;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
`;

export const LoaderCircle = styled(motion.div)`
  position: absolute;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: 0.8rem solid;
  border-color: var(--text-color);
`;

export const LoaderText = styled.h2`
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-regular);
  text-align: center;
  flex: 1;
`;
