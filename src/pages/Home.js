import React, { Component, useState, useEffect } from "react";

import Header from '../components/Home/Header.js';
import HomeVector from '../components/Home/HomeVector.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import '../css/style.css';

function LoginForm() {
  const [fetchData, setfetchData] = useState('');
  const [DataisLoaded, setDataisLoaded] = useState(false);
  const [input, setInput] = useState('james@.in');
  let navigate = useNavigate();
  
  function HandleSubmit (event){
    event.preventDefault();
   
    console.log(input+' input was logged');
    if(input === 'eve.holt@regres.in'){
      navigate("../members", { replace: true });
    } else {
      alert('Wrong Email! '+input + '. Pls Type, do not copy and paste');
      navigate("../", { replace: true });
    }
  } 
  
  useEffect(() => {
     fetch(
      "https://reqres.in/api/users/4")
      .then((res) => res.json())
      .then((json) => {
         setfetchData(json.data)
         })
       .then(
          setDataisLoaded(true)
      )
  }, []);
   
      if (!DataisLoaded){
        return
          <div>
            <h1> Pleses wait some time.... </h1>
          </div>
      }
      if(fetchData){
        return (
        <div>
          <form className="form"  onSubmit={(event) => HandleSubmit(event)}>
            <span className="light-text">Welcome back, please login to your account</span> <br/>
            <small class="text-primary">valid email: <b> eve.holt@reqres.in </b><br/> any password will work</small>
            <small className="error-msg"></small>
            <div className="form-control">
                <input type="text" id="email" className="form-input email change"placeholder="eve.holt@reqres.in" value={input} onInput={e => setInput(e.target.value)} required />
                    <span className="email-password-place">Email address</span>
            </div>
            <div className="form-control">
                <input type="password" className="form-input password change" value="Password" required />
                <span className="email-password-place">Password</span>
            </div>
            <div className="form-control">
              <input type="checkbox" id="remember-me"/>
              <small><label htmlFor="remember-me" className="light-text">Remember Me</label></small>
              <a href="" className="forget-password light-text"><small>Forgot Password?</small></a>
            </div>
            <div className="form-control buttons-div">
              <button type="submit" className="button login" id="log-in" >Login</button>
              <button type="submit" className="button sign-up" id="sign-up">Sign up</button>
            </div>
          </form>
        </div>
        )
    }
  }

export default class Home extends Component {
   render() {
    return (
         <main className="main-content p-4">
            
          <section className="form-container flex-item">
            <Header/>
            <LoginForm/>
          </section>
          <HomeVector/>
        </main>
    )
  }
}
