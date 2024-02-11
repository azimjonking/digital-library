import React from "react";
import "./reviews.css";

import reviewer1 from "../../img/cover-1.png";
import reviewer2 from "../../img/cover-2.png";
import reviewer3 from "../../img/cover-3.png";

const Reviews = () => {
  return (
    <div className="reviews container">
      <h6 className="subtitle">REVIEWS</h6>
      <p className="title">💬• Reviews of Others</p>

      <div className="reviews-container">
        {/* reviews content 1 start */}
        <div className="reviews-content">
          <div className="reviewer-img">
            <img src={reviewer1} alt="user 1" />
          </div>
          <p className="reviewer-description">
            Engaging plot, vivid characters; a captivating read that lingers in
            your thoughts.
          </p>
          <p className="reviewer-name">Ahmad Saugi</p>
          <p className="reviewer-job">College Student</p>
        </div>
        {/* reviews content 1 end */}

        {/* reviews content 2 start */}
        <div className="reviews-content">
          <div className="reviewer-img">
            <img src={reviewer2} alt="user 2" />
          </div>
          <p className="reviewer-description">
            Thought-provoking narrative and rich prose. A must-read for any avid
            book lover!
          </p>
          <p className="reviewer-name">Muhammad Alfian</p>
          <p className="reviewer-job">School Student</p>
        </div>
        {/* reviews content 2 end */}

        {/* reviews content 3 start */}
        <div className="reviews-content">
          <div className="reviewer-img">
            <img src={reviewer3} alt="user 3" />
          </div>
          <p className="reviewer-description">
            Immersive storytelling! An enriching literary experience worth
            savoring and sharing.
          </p>
          <p className="reviewer-name">Wahyu Amirulloh</p>
          <p className="reviewer-job">ERP Developer</p>
        </div>
        {/* reviews content 3 end */}
      </div>
    </div>
  );
};

export default Reviews;
