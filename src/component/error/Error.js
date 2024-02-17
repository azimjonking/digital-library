import React from 'react';
import { Link } from 'react-router-dom';
import "./error.css";
import errorImg from "../../img/error.png";

const Error = () => {
  return (
    <div className='error'>
      <div className="error-container">
        <div className="error-img">
          <img src={errorImg} alt="Error" />
        </div>
        <h1 className="error-title">Oh No! Error 404</h1>
        <p className="error-desc">Oops! That page seems to have taken a detour. Let us guide you back to your destination.</p>
        <Link to="/">Back to Homepage</Link>
      </div>
    </div>
  )
}

export default Error;
