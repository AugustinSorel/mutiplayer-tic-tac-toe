import { FC } from "react";
import { HeaderContainer, HeaderTitle } from "./Header.styled";

interface Props {
  title: string;
}

const Header: FC<Props> = ({ title }) => {
  return (
    <HeaderContainer
    // initial={{ y: "-100%" }}
    // animate={{ y: 0 }}
    // exit={{ y: "-100%" }}
    >
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
