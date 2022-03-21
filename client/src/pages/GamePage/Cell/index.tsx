import { FC } from "react";
import SvgIcon from "../../../shared/components/formElements/SvgIcon";
import useGame from "../../../shared/store/useGame";
import theme from "../../../shared/styles/theme";
import SvpPaths from "../../../shared/utils/SvgPaths";
import { CellStyle } from "./Cell.styled";

interface Props {
  index: number;
}

const Cell: FC<Props> = ({ index }) => {
  const gameCell = useGame((state) => state.getGameCell(index));
  const setGameStatus = useGame((state) => state.setGameStatus);

  const clickHandler = () => {
    if (gameCell !== "") {
      return;
    }

    setGameStatus(index);
  };

  return (
    <CellStyle
      whileHover={{
        backgroundColor: theme.colors.accentBackgroundColor,
      }}
      onClick={clickHandler}
    >
      {gameCell === "X" && <SvgIcon path={SvpPaths.cross} />}

      {gameCell === "O" && <SvgIcon path={SvpPaths.circle} />}
    </CellStyle>
  );
};

export default Cell;
