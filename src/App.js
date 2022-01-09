import React from 'react';
import GlobalStyle from './common/GlobalStyle.js';
import Nav from './components/Nav.js';
import Main from './components/Main.js';

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Main />
    </>
  );
}

export default App;
