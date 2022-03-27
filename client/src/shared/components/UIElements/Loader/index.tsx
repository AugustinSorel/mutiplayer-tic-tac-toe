import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import getRingVariants from "../../../framer-motion/getLoaderVariants";
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
      <LoaderContainer key={"loaderContainer"}>
        <LoaderRing variants={getRingVariants()} animate="animate" />
        <LoaderRing variants={getRingVariants(1)} animate="animate" />
        <LoaderDot />
      </LoaderContainer>

      <LoaderText>{text}</LoaderText>
    </AnimatePresence>
  );
};

export default Loader;
