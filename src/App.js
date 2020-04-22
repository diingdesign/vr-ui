import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import Main from './Main';
import Signin from './Signin';
import GameMenu from './GameMenu';
import Running from './Running';
import SettingsPage from './SettingsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route path="/game-menu">
            <GameMenu />
          </Route>
          <Route path="/running/:stepId">
            <Running />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
