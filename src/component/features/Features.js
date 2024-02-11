import React from "react";
import "./features.css";

const Features = () => {
  return (
    <div className="features container">
      <h6 className="subtitle">FEATURES</h6>
      <p className="title">🤔• What You Can Do?</p>

      <div className="features-container">
        <div className="features-item">
          <div className="icon">
            <ion-icon name="search-outline"></ion-icon>
          </div>
          <h4>Search book</h4>
          <p>
            Effortlessly find your next read with our powerful and intuitive
            book search.
          </p>
        </div>

        <div className="features-item">
          <div className="icon">
            <ion-icon name="chatbubble-outline"></ion-icon>
          </div>
          <h4>Review book</h4>
          <p>
            Discover insightful critiques and share your thoughts on diverse
            literary masterpieces effortlessly.
          </p>
        </div>

        <div className="features-item">
          <div className="icon">
            <ion-icon name="heart-outline"></ion-icon>
          </div>
          <h4>Wishlist book</h4>
          <p>
            Curate your literary dreams–wishlist books for future adventures and
            discoveries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
