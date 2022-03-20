import { motion } from "framer-motion";
import styled from "styled-components";

export const CellStyle = styled(motion.div)`
  background-color: var(--background-color);
  height: 100%;
  width: 100%;
  cursor: pointer;
  padding: 1rem;
`;
