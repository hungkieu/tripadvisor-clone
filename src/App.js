import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from './components/Header';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import Social from './components/Social';

import AppContext, { defaultValue } from './context';
import theme from './theme';

function App() {
  return (
    <AppContext.Provider value={defaultValue}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Hero />
          <QuickLinks />
          <Social />
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
