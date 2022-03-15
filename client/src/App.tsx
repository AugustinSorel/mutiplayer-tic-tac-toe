import { ThemeProvider } from "styled-components";
import RoomCodePage from "./pages/RoomCodePage";
import GlobalStyle from "./shared/styles/globalStyle";
import theme from "./shared/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RoomCodePage />
    </ThemeProvider>
  );
}

export default App;
