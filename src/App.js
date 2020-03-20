import React, { Fragment } from 'react';

import SignUpForm from './components/signUpForm/SignUpForm';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <Fragment>
      <NavBar />
      <SignUpForm />
    </Fragment>
  );
}

export default App;
