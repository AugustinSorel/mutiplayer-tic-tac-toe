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
        --accent-color: ${({ theme }) => theme.colors.accentColor};
        
        --font-size-extra-small: ${({ theme }) => theme.fontSizes.extraSmall};
        --font-size-small: ${({ theme }) => theme.fontSizes.small};
        --font-size-medium: ${({ theme }) => theme.fontSizes.medium};
        --font-size-large: ${({ theme }) => theme.fontSizes.large};
        --font-size-extra-large: ${({ theme }) => theme.fontSizes.extraLarge};
        
        --border-radius: ${({ theme }) => theme.sizes.borderRadius};
        --border-height: ${({ theme }) => theme.sizes.borderHeight};

        --font-weight-light: ${({ theme }) => theme.fontweights.light};
        --font-weight-regular: ${({ theme }) => theme.fontweights.regular};
        --font-weight-bold: ${({ theme }) => theme.fontweights.bold};
    }

    body{
        background-color: var(--background-color);
        color: var(--text-color);
        font-family: 'Poppins', sans-serif;
        font-size: var(--font-size-medium);
    }

    ::selection{
        background-color: var(--accent-color);
    }
`;

export default GlobalStyle;
