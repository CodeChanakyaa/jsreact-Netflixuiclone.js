import React, { useRef, useState } from 'react';
import './Register.scss';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const clickHandler = () => {
    setEmail(emailRef.current.value);
  }

  const clickStartHandler = () => {
    setPassword(passwordRef.current.value);
  }

  return (
    <div className='register'>
      <div className="top">
        <div className="wrapper">
          <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png" alt="" />
          <button className='login-button' onClick={() => navigate("/login")}>Sign In</button>
        </div>
      </div>

      <div className="container">
        <h1>Unlimited movies, TV shows and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>

        {
          !email ? (
            <div className="input">
              <input type="email" placeholder='Email address' ref={emailRef} />
              <button className="register-button" onClick={clickHandler}>Get Started</button>
            </div>
          ) : (
            <form className="input">
              <input type="password" placeholder='Password' ref={passwordRef} />
              <button className="register-button" onClick={clickStartHandler}>Start Now</button>
            </form>
          )
        }

      </div>
    </div>
  )
}

export default Register;