import { createGlobalStyle } from 'styled-components';
import { tokens } from './tokens';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${tokens.fonts.family};
    font-size: ${tokens.fonts.sizeBody};
    background: ${tokens.colors.background};
    color: ${tokens.colors.textPrimary};
    min-height: 100vh;
  }

  h1 {
    font-size: ${tokens.fonts.sizeH1};
    color: ${tokens.colors.textPrimary};
  }

  h2 {
    font-size: ${tokens.fonts.sizeH2};
    color: ${tokens.colors.textPrimary};
  }

  a {
    color: ${tokens.colors.link};

    &:hover {
      text-decoration: underline;
    }
  }
`;
