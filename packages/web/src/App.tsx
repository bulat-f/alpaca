import React from 'react';
import logo from './logo.svg';
import Root from './Root'
import { Button } from '@alpaca/ui';

function App() {
  return (
    <Root>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
          <Button>Text</Button>
        </header>
      </div>
    </Root>
  );
}

export default App;
