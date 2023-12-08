// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import LogIn from './components/LogIn ';
import SignIn from './components/SignIn';
import Men from './components/Men';
import Women from './components/Women';
import Kids from './components/Kids';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/login" component={LogIn} />
        <Route path="/men" component={Men} />
        <Route path="/women" component={Women} />
        <Route path="/kids" component={Kids} />
        <Route exact path="/" component={Header} />
      </Switch>
    </Router>
  );
};

export default App;
