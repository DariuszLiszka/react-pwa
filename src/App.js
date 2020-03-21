import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SignUpForm from './components/signUpForm/SignUpForm';
import NavBar from './components/navBar/NavBar';
import Home from './components/home/Home';
function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path='/signup'>
            <SignUpForm />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
