import React, { Component } from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="form">
        <span className="light-text">Welcome back, please login to your account</span> <br/>
        <small>valid email: eve.holt@reqres.in <br/> any password will work</small>
        <small className="error-msg"></small>
        <div className="form-control1">
            <input type="text" className="form-input1 email change"
                value="eve.holt@reqres.in" required />
                <span className="email-password-place">Email address</span>
        </div>
        <div className="form-control1">
            <input type="password" className="form-input1 password change" value="Passwordp" required />
            <span className="email-password-place">Password</span>
        </div>
        <div className="form-control1">
          <input type="checkbox" id="remember-me"/>
          <small><label for="remember-me" className="light-text">Remember Me</label></small>
          <a href="" className="forget-password light-text"><small>Forgot Password?</small></a>
        </div>
        <div className="form-control1 buttons-div">
          <a href=""><button className="button login" id="log-in">Login</button></a>
          <a href=""><button className="button sign-up" id="sign-up">Sign up</button></a>
        </div>
      </form>
    )
  }
}

export default { LoginForm }
