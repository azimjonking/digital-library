import React from "react";
import Main from "../../component/main/Main";
import Features from "../../component/features/Features";
import Services from "../../component/services/Services";
import Reviews from "../../component/reviews/Reviews";
import Location from "../../component/location/Location";

const Home = () => {
  return (
    <div>
      <Main />
      <Features />
      <Services />
      <Reviews />
      <Location />
    </div>
  );
};

export default Home;
