import React, { Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme, ITheme } from '@alpaca/ui';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 14px;
  }

  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${({ theme: { colors } }: { theme: ITheme }) => colors.background};
  }
`;

interface IProps {
  children: React.ReactNode
}

const Root = ({ children }: IProps) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <GlobalStyle />
      {children}
    </Fragment>
  </ThemeProvider>
);

export default Root;
