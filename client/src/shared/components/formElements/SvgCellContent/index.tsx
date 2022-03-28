import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { SvgCellContentStyle } from "./SvgCellContent.styled";
import { motion } from "framer-motion";

interface Props {
  path: string;
}

const SvgCellContent: FC<Props> = ({ path }) => {
  return (
    <AnimatePresence initial>
      <SvgCellContentStyle
        viewBox="-1 0 26 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d={path}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.75 }}
        />
      </SvgCellContentStyle>
    </AnimatePresence>
  );
};

export default SvgCellContent;
