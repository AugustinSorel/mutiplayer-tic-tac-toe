import theme from "../../../shared/styles/theme";
import { CellStyle } from "./Cell.styled";

const Cell = () => {
  return (
    <CellStyle
      whileHover={{
        backgroundColor: theme.colors.accentBackgroundColor,
      }}
      onClick={() => console.log("clicked")}
    ></CellStyle>
  );
};

export default Cell;
