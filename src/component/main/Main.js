import React from "react";
import { NavLink } from "react-router-dom";
import "./main.css";

import book1 from "../../img/Dompet Ayah Sepatu Ibu.png";
import book2 from "../../img/Talking to Strangers.png";
import book3 from "../../img/The Visual MBA.png";
import book4 from "../../img/The Midnight Library.png";

const Main = () => {
  return (
    <div className="main container">
      <div className="main-container">
        {/* main info start */}
        <div className="main-info">
          <h1>
            Search & review <br />
            your <span>fav book</span>
            <br />
            effortlessly
          </h1>
          <p>
            Embark on a literary journey like never before with our
            revolutionary library application! Introducing a seamless experience
            that transcends traditional boundaries, where you can effortlessly
            search your favorite books.
          </p>
          <NavLink to="/">
            <span>Start Now</span>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </NavLink>
        </div>
        {/* main info end */}

        {/* main books start */}
        <div className="main-books">
          {/* book column 1 start */}
          <div className="book-column column-1">
            <div className="book-1__img  book-img">
              <img src={book1} alt="Dompet Ayah Sepatu Ibu" />
            </div>
          </div>
          {/* book column 1 end */}

          {/* book column 2 start */}
          <div className="book-column column-2">
            <div className="book-2__img  book-img">
              <img src={book2} alt="Talking to Strangers" />
            </div>
            <div className="book-3__img  book-img">
              <img src={book3} alt="The Visual MBA" />
            </div>
          </div>
          {/* book 2 end */}

          {/* book column 3 start */}
          <div className="book-column column-3">
            <div className="book-4__img book-img">
              <img src={book4} alt="The Midnight Library" />
            </div>
          </div>
          {/* book column 3 end */}
        </div>
        {/* main books end */}
      </div>
    </div>
  );
};

export default Main;
