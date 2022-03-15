import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --background-color: ${({ theme }) => theme.colors.backgroundColor};
        --text-color: ${({ theme }) => theme.colors.textColor};
    }

    body{
        background-color: var(--background-color);
        color: white;
        font-family: 'Poppins', sans-serif;
    }
`;

export default GlobalStyle;
