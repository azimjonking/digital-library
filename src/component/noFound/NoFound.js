import React from 'react';
import "./noFound.css";
import { Link } from 'react-router-dom';

import noFoundImg from "../../img/noFound.png";

const NoFound = () => {
  return (
    <div className='noFound'>
      <div className="noFound-container">
        <div className="noFound-img">
          <img src={noFoundImg} alt="noFound" />
        </div>
        <h1 className="noFound-title">No Result Found!</h1>
        <p className="noFound-desc">"Sorry, we came up empty-handed. Let's broaden our search and help you find what you're looking for.</p>
        <Link to="/">Back to Homepage</Link>
      </div>
    </div>
  )
}

export default NoFound;