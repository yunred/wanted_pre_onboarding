import React from 'react';
import GlobalStyle from './common/GlobalStyle.js';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import useWindowSize from './common/useWindowSize.js';

function App() {
  let size = useWindowSize();
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Main size={size} />
    </>
  );
}

export default App;
