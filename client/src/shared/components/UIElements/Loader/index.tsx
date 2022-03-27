import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import getRingVariants from "../../../framer-motion/getLoaderVariants";
import { LoaderCircle, LoaderContainer, LoaderText } from "./Loader.styled";

interface Props {
  text: string;
}

const Loader: FC<Props> = ({ text }) => {
  return (
    <AnimatePresence initial>
      <LoaderContainer key={"loaderContainer"}>
        <LoaderCircle
          variants={getRingVariants()}
          animate="animate"
          initial="initial"
        />
        <LoaderCircle
          variants={getRingVariants(0.5)}
          animate="animate"
          initial="initial"
        />
      </LoaderContainer>
      <LoaderText>{text}</LoaderText>
    </AnimatePresence>
  );
};

export default Loader;
