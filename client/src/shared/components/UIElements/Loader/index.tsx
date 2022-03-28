import { FC } from "react";
import getRingVariants from "../../../framer-motion/getLoaderVariants";
import { LoaderCircle, LoaderText, LoaderWrapper } from "./Loader.styled";

interface Props {
  text: string;
}

const variants = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
  },
};

const Loader: FC<Props> = ({ text }) => {
  return (
    <LoaderWrapper
      variants={variants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.75 }}
    >
      <LoaderCircle variants={getRingVariants()} />

      <LoaderCircle variants={getRingVariants(0.5)} />

      <LoaderText>{text}</LoaderText>
    </LoaderWrapper>
  );
};

export default Loader;
