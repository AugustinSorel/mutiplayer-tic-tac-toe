import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderContainer = styled(motion.header)``;

export const HeaderTitle = styled.h1`
  font-size: var(--font-size-extra-large);
  font-weight: var(--font-weight-regular);
  text-align: center;
  padding: 1rem;
  user-select: none;
  text-transform: capitalize;
`;
