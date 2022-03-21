import { FC } from "react";
import { HeaderTitle } from "./Header.styled";

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return <HeaderTitle>{title}</HeaderTitle>;
};

export default Header;
