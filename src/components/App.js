import React from 'react';
import Header from './ui/Header'
import { ThemeProvider } from '@material-ui/styles';
import Theme from './ui/Theme';
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Header />
        Helloworld
      </div>
    </ThemeProvider>
  );
}

export default App;
