import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const PrivateRoute: FC<Props> = ({ children }): any => {
  if (false) {
    return children;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
