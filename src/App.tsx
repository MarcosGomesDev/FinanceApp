import React from 'react';

import { ThemeProvider } from './themes';
import { Router } from '@routes/Router';

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
