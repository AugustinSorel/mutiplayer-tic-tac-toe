import { AnimatePresence } from "framer-motion";
import getLoaderVariants from "../../../framer-motion/getLoaderVariants";
import { LoaderContainer, LoaderDot, LoaderRing } from "./Loader.styled";

const Loader = () => {
  return (
    <AnimatePresence initial>
      <LoaderContainer>
        <LoaderRing variants={getLoaderVariants()} animate="animate" />
        <LoaderRing variants={getLoaderVariants(1)} animate="animate" />
        <LoaderDot />
      </LoaderContainer>
    </AnimatePresence>
  );
};

export default Loader;
