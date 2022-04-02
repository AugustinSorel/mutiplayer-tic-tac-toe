import { FC } from "react";
import { Socket } from "socket.io-client";
import gameChars from "../../../game/utils/gameChars";
import SvgCellContent from "../../../shared/components/formElements/SvgCellContent";
import gameStore from "../../../shared/store/GameSore";
import theme from "../../../shared/styles/theme";
import SvpPaths from "../../../shared/utils/SvgPaths";
import { CellStyle } from "./Cell.styled";

interface Props {
  index: number;
  socket: Socket;
  roomId: string;
}

const Cell: FC<Props> = ({ index, socket, roomId }) => {
  const gameCell = gameStore((state) => state.getGameCell(index));
  const setGameStatus = gameStore((state) => state.setGameStatus);
  const gameStatus = gameStore((state) => state.gameStatus);
  const isPlayerOneTurn = gameStore((state) => state.isPlayerTurn);
  const isPlayerPlayerOne = gameStore((state) => state.isPlayerPlayerOne);
  const setIsGameOver = gameStore((state) => state.setIsGameOver);

  const clickHandler = () => {
    if (gameCell !== "" || !isPlayerOneTurn) {
      return;
    }

    let newGameStatus = [...gameStatus];
    newGameStatus[index] = isPlayerPlayerOne
      ? gameChars.playerOne
      : gameChars.playerTwo;

    socket.emit("cellClicked", { newGameStatus, roomId });
    setGameStatus(newGameStatus);

    setIsGameOver(newGameStatus);
  };

  return (
    <CellStyle
      whileHover={{
        backgroundColor: theme.colors.accentBackgroundColor,
      }}
      onClick={clickHandler}
    >
      {gameCell === "X" && <SvgCellContent path={SvpPaths.cross} />}

      {gameCell === "O" && <SvgCellContent path={SvpPaths.circle} />}
    </CellStyle>
  );
};

export default Cell;
