import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
