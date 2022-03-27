import { motion } from "framer-motion";
import styled from "styled-components";

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  margin: 0 auto;
  flex: 2;
`;

export const LoaderRing = styled(motion.div)`
  position: absolute;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;

  border-width: 0.75rem;
  border-style: solid;
  border-color: transparent;

  border-left-color: var(--text-color);
  border-right-color: var(--text-color);
`;

export const LoaderDot = styled.div`
  position: absolute;
  border-radius: 50%;

  width: 1rem;
  height: 1rem;
  background: var(--text-color);
`;

export const LoaderText = styled.h2`
  text-align: center;
  flex: 1;
`;
