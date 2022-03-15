import { ThemeProvider } from "styled-components";
import GlobalStyle from "./shared/styles/globalStyle";
import theme from "./shared/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
