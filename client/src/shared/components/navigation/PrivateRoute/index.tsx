import { FC } from "react";
import { Navigate } from "react-router-dom";
import useGame from "../../../store/useGame";

interface Props {
  children: JSX.Element;
}

const PrivateRoute: FC<Props> = ({ children }) => {
  const roomCode = useGame((state) => state.roomCode);

  if (roomCode) {
    return children;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
