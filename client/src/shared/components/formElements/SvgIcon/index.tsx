import { FC } from "react";
import { Svg } from "./SvgIcon.styled";

interface Props {
  path: string;
}

const SvgIcon: FC<Props> = ({ path }) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d={path} />
    </Svg>
  );
};

export default SvgIcon;
