import { FC } from "react";
import { SvgCellContentStyle } from "./SvgCellContent.styled";

interface Props {
  path: string;
}

const SvgCellContent: FC<Props> = ({ path }) => {
  return (
    <SvgCellContentStyle xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d={path} />
    </SvgCellContentStyle>
  );
};

export default SvgCellContent;
