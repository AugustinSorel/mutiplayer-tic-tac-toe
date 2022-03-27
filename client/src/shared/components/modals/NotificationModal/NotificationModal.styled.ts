import { motion } from "framer-motion";
import styled from "styled-components";

export const NotificationModalContainer = styled(motion.div)`
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: 1rem;
  position: absolute;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);

  width: 50%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #ffffff33;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  border: 1px solid #ffffff33;
`;

export const NotificationModalText = styled.h2`
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-regular);
  color: var(--accent-background-color);
`;
