import { FC } from "react";
import SvgIcon from "../../../shared/components/formElements/SvgIcon";
import theme from "../../../shared/styles/theme";
import { CellStyle } from "./Cell.styled";

interface Props {
  gameStatus: string[];
  setGameStatus: (gameStatus: string[]) => void;

  isPlayerOneTurn: boolean;
  setIsPlayerOneTurn: (isPlayerOneTurn: boolean) => void;

  index: number;
}

const Cell: FC<Props> = ({
  isPlayerOneTurn,
  setIsPlayerOneTurn,
  gameStatus,
  setGameStatus,
  index,
}) => {
  const clickHandler = () => {
    setIsPlayerOneTurn(!isPlayerOneTurn);
    const newGameStatus = [...gameStatus];
    newGameStatus[index] = isPlayerOneTurn ? "X" : "O";
    setGameStatus(newGameStatus);
  };

  return (
    <CellStyle
      whileHover={{
        backgroundColor: theme.colors.accentBackgroundColor,
      }}
      onClick={clickHandler}
    >
      {gameStatus[index] === "X" && (
        <SvgIcon path="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
      )}

      {gameStatus[index] === "O" && (
        <SvgIcon path="M12 0c-6.623 0-12 5.377-12 12s5.377 12 12 12 12-5.377 12-12-5.377-12-12-12zm0 22c-5.519 0-10-4.48-10-10 0-5.519 4.481-10 10-10 5.52 0 10 4.481 10 10 0 5.52-4.48 10-10 10z" />
      )}
    </CellStyle>
  );
};

export default Cell;
