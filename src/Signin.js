import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const buttonRef = useRef();
  const emailFieldRef = useRef();
  const passwordFieldRef = useRef();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleEmailFieldChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordFieldChange = (evt) => {
    setPassword(evt.target.value);
    console.log(`password: ${password}`);
  };

  const isButtonShallDisable = () => {
    console.log(`shall disable? ${email === undefined || email === "" || password === undefined || password === ""}`);
    return email === undefined || email === "" || password === undefined || password === "";
  };

  return (
    <div className="container h-100 d-flex justify-content-center align-items-start outbox">
      <form className="panel d-flex flex-column">
        <h1>Welcome Back</h1>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input ref={emailFieldRef} type="email" id="email" className="form-control" aria-describedby="emailHelp" onChange={handleEmailFieldChange}/>
          <small id="emailHelp" className="form-text tex-muted">We'll never share your email with anyone else</small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input ref={passwordFieldRef} type="password" id="password" className="form-control" aria-describedby="passwordHelp" onChange={handlePasswordFieldChange}/>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="check"/>
          <label htmlFor="check" className="form-check-label">Remember Me</label>
        </div>
        <Link to="/game-menu" ref={buttonRef} role="button" className={`btn btn-primary btn-lg btn-round align-self-start${isButtonShallDisable() ? " disabled" : ""}`}>Sign In</Link>
      </form>
    </div>
  );
}

export default Login;
