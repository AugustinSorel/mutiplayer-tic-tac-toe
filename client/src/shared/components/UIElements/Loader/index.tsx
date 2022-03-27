import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import getLoaderVariants from "../../../framer-motion/getLoaderVariants";
import {
  LoaderContainer,
  LoaderDot,
  LoaderRing,
  LoaderText,
} from "./Loader.styled";

interface Props {
  text: string;
}

const Loader: FC<Props> = ({ text }) => {
  return (
    <AnimatePresence initial>
      <LoaderContainer>
        <LoaderRing variants={getLoaderVariants()} animate="animate" />
        <LoaderRing variants={getLoaderVariants(1)} animate="animate" />
        <LoaderDot />
      </LoaderContainer>

      <LoaderText>{text}</LoaderText>
    </AnimatePresence>
  );
};

export default Loader;
