import { FC } from "react";
import SvgIcon from "../../../shared/components/formElements/SvgIcon";
import theme from "../../../shared/styles/theme";
import SvpPaths from "../../../shared/utils/SvgPaths";
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
      {gameStatus[index] === "X" && <SvgIcon path={SvpPaths.cross} />}

      {gameStatus[index] === "O" && <SvgIcon path={SvpPaths.circle} />}
    </CellStyle>
  );
};

export default Cell;
