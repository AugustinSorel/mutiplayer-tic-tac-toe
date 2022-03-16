import { ThemeProvider } from "styled-components";
import RoomCodePage from "./pages/RoomCodePage";
import Header from "./shared/components/navigation/Header";
import GlobalStyle from "./shared/styles/globalStyle";
import theme from "./shared/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <RoomCodePage />
    </ThemeProvider>
  );
}

export default App;
