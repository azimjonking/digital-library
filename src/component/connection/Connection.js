import React from 'react';
import "./connection.css";
import { Link } from 'react-router-dom';

import connectionImg from "../../img/connection.png";

const Connection = () => {
  return (
    <div className='connection'>
      <div className="connection-container">
        <div className="connection-img">
          <img src={connectionImg} alt="Connection" />
        </div>
        <h1 className="connection-title">Connection Lost!</h1>
        <p className="connection-desc">Oops! Looks like our connection got lost. Sorry, it looks like you're off the grid. </p>
        <Link to="/">Back to Homepage</Link>
      </div>
    </div>
  )
}

export default Connection;
