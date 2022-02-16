import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

export default (child) => (
  <ThemeProvider theme={theme}>
    {child}
  </ThemeProvider>
)
