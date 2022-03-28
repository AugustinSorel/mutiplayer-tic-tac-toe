import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { PathCellContent, SvgCellContentStyle } from "./SvgCellContent.styled";

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
        <PathCellContent
          d={path}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.75 }}
        />
      </SvgCellContentStyle>
    </AnimatePresence>
  );
};

export default SvgCellContent;
