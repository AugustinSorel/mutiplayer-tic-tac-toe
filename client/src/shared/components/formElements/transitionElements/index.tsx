import { BoxTransition } from "./TransitionElements.styled";

const TransitionElements = (): any => {
  return [...Array(5)].map((_, index) => (
    <BoxTransition
      key={index}
      index={index}
      initial={{ width: "100%" }}
      animate={{ width: 0 }}
      exit={{ width: "100%" }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    />
  ));
};

export default TransitionElements;
