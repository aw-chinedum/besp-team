import React, { Component } from "react";
import  { Link } from "react-router-dom";
import logo from '../images/logo.svg';
import '../css/style.css';

function NotFound(){
    return (
      <main className="main-content p-4">
        <h1 className="d-block">Page not Found</h1>
        <br/>
        <Link to="/" className="d-block">Back Home</Link>
      </main>
    )
  }
export default NotFound;
