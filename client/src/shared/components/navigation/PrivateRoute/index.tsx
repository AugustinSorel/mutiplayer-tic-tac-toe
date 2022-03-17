import { FC } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const PrivateRoute: FC<Props> = ({ children }) => {
  if (false) {
    return children;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
