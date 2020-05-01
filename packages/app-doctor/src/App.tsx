import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Root from './Root'
import { Container } from '@alpaca/ui';

import { LoginPage } from 'pages/LoginPage'

function App() {
  return (
    <Root>
      <Container>
        <Router>
          <Switch>
            <Route path="/" component={LoginPage} />
          </Switch>
        </Router>
      </Container>
    </Root>
  );
}

export default App;
