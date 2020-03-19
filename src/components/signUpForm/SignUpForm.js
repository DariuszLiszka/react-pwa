import React, { Component } from 'react';
import styles from './SignUpForm.module.css';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      validationErrors: {
        email: '',
        password: ''
      },
      emailValid: false,
      passwordValid: false,
      formValid: false
    };
  }
  handleUserInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => this.validateForm(name, value));
  };
  validateForm = (name, value) => {
    let { emailValid, passwordValid, validationErrors } = this.state;

    switch (name) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        validationErrors.email = emailValid ? '' : 'email invalid';
        break;
      case 'password':
        passwordValid = value.length > 6;
        validationErrors.password = passwordValid ? '' : 'password too short';
        break;
      default:
        break;
    }
    this.setState(
      {
        validationErrors,
        emailValid,
        passwordValid
      },
      this.validForm(validationErrors)
    );
  };

  validForm(validationErrors) {
    this.setState({
      formValid: Object.keys(validationErrors).every(
        k => validationErrors[k] === ''
      )
    });
  }

  render() {
    return (
      <form className={styles.signUpContainer}>
        <h2>Sign up!</h2>
        <div className={styles.loginIcon}></div>
        <div>
          <label htmlFor='email'>enter email</label>
          <input
            type='email'
            name='email'
            className='form-control'
            value={this.state.email}
            onChange={event => this.handleUserInput(event)}
          />
        </div>
        <div>
          <label htmlFor='password'>enter password</label>
          <input
            type='password'
            name='password'
            className='form-control'
            value={this.state.password}
            onChange={event => this.handleUserInput(event)}
          />
        </div>
        <button type='submit' disabled={!this.state.formValid}>
          Sign up
        </button>
      </form>
    );
  }
}

export default SignUpForm;
