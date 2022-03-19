import { FC } from "react";
import { TransitionWrapperContainer } from "./TransitionWrapper.styled";

interface Props {
  children: any;
}

const TransitionWrapper: FC<Props> = ({ children }) => {
  return (
    <TransitionWrapperContainer
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </TransitionWrapperContainer>
  );
};

export default TransitionWrapper;
