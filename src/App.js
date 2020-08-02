import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';



function App() {
  return (
    <Router>
      <React.Fragment>
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact/>
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;