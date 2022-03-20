import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      accentBackgroundColor: string;
      textColor: string;
      accentColor: string;
    };

    fontSizes: {
      extraSmall: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };

    sizes: {
      borderRadius: string;
      borderHeight: string;
    };

    fontweights: {
      light: string;
      regular: string;
      bold: string;
    };
  }
}
