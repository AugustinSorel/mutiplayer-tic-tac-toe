import { Variants } from "framer-motion";

function getLoaderVariants(delay = 0): Variants {
  return {
    initial: {
      scale: 0,
      opacity: 1,
    },

    animate: {
      scale: 1,
      opacity: 0,
      transition: {
        repeat: Infinity,
        duration: 1.5,
        delay,
      },
    },
  };
}

export default getLoaderVariants;
