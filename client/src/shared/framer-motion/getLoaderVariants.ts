import { Variants } from "framer-motion";

function getLoaderVariants(delay = 0): Variants {
  return {
    animate: {
      rotate: 360,
      scale: 0.5,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        delay,
      },
    },
  };
}

export default getLoaderVariants;
