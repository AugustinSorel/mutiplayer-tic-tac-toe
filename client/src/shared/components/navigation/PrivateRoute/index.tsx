import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useGame from "../../../store/useGame";

interface Props {
  children: ReactNode;
}

const PrivateRoute: FC<Props> = ({ children }): any => {
  const roomCode = useGame((state) => state.roomCode);

  if (roomCode) {
    return children;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
