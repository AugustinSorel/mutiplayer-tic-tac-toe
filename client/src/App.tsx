import { ThemeProvider } from "styled-components";
import RoomCodePage from "./pages/RoomCodePage";
import Header from "./shared/components/navigation/Header";
import GlobalStyle from "./shared/styles/globalStyle";
import theme from "./shared/styles/theme";
import { Routes, Route, Navigate } from "react-router-dom";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<RoomCodePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
