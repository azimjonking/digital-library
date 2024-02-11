import React from "react";
import { NavLink } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <div className="main container">
      {/* main info start */}
      <div className="main-info">
        <h1>
          Search & review <br />
          your <span>fav book</span>
          <br />
          effortlessly
        </h1>
        <p>
          Embark on a literary journey like never before with our revolutionary
          library application! Introducing a seamless experience that transcends
          traditional boundaries, where you can effortlessly search your
          favorite books.
        </p>
        <NavLink to="/">
          <span>Start Now</span>
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </NavLink>
      </div>
      {/* main info end */}

      {/* main books start */}
      <div className="main-books">
        <h1>Rasmlar</h1>
      </div>
      {/* main books end */}
    </div>
  );
};

export default Main;