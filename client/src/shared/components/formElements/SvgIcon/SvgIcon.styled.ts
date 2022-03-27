import { motion } from "framer-motion";
import styled from "styled-components";

export const SvgIconContainer = styled(motion.div)`
  padding: 0;
  cursor: pointer;
  border-radius: 50%;

  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--accent-background-color);
  }
`;

interface SvgIconStyleProps {
  size: number;
}

export const SvgIconStyle = styled.svg<SvgIconStyleProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  fill: var(--text-color);
`;
