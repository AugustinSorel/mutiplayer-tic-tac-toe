import { ThemeProvider } from "styled-components";
import RoomCodePage from "./pages/RoomCodePage";
import GlobalStyle from "./shared/styles/globalStyle";
import theme from "./shared/styles/theme";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import GamePage from "./pages/GamePage";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import gameStore from "./shared/store/useGame";

function App() {
  const location = useLocation();
  const socket = gameStore((state) => state.socket);

  useEffect(() => {
    socket.on("connection", () => {});
    console.log("client connected");
  }, [socket]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<RoomCodePage />} />
          <Route path="/game/:gameId" element={<GamePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
