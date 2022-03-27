import { motion } from "framer-motion";
import styled from "styled-components";

interface SvgIconContainerProps {
  inverted: number;
}

export const SvgIconContainer = styled(motion.div)<SvgIconContainerProps>`
  padding: 0;
  cursor: pointer;
  border-radius: 50%;

  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) =>
      props.inverted === 1
        ? "var(--accent-color)"
        : "var(--accent-background-color)"};
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
