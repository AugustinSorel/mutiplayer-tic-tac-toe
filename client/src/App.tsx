import { ThemeProvider } from "styled-components";
import GlobalStyle from "./shared/styles/globalStyle";
import theme from "./shared/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Hello world</h1>
    </ThemeProvider>
  );
}

export default App;
