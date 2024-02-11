import React from "react";
import "./services.css";
import serviceImg from "../../img/Service.png";
import readingImg from "../../img/Reading.png";

const Services = () => {
  return (
    <div className="services container">
      <h6 className="subtitle">SERVICES</h6>
      <p className="title">🚀• The Services for You</p>

      <div className="services-container">
        <div className="services-img">
          <img src={serviceImg} alt="Service" />
        </div>
        <div className="services-info info-right">
          <h4>
            <span>Rent</span> your favorite book fairly easy on <span>Lidia</span>!
          </h4>
          <p className="text1">
            Viewing, rent, and organize your favorite books has never been
            easier. An integrated digital library rent that’s simple to use,
            Lidia lets you spend less time managing your work and more time
            actually doing it!
          </p>
          <p className="text2">
            Effortless rentals, personalized shelves—Lidia transforms book
            management, enhancing your reading experience~
          </p>
        </div>
        <div className="services-info info-left">
          <h4>
            Quick Book Rentals:
            <span>Dive</span> into <span>Reading</span> Instantly
          </h4>
          <p className="text1">
            Discover instant literary delight. Access a vast library, borrow
            your favorite reads, and dive into captivating stories within
            minutes. Reading made quick and easy, just a click away!
          </p>
          <p className="text2">
            Unlock a world of stories effortlessly. Browse genres, choose, rent
            in minutes. Seamlessly manage your reading adventures with our
            intuitive platform~
          </p>
        </div>
        <div className="services-img">
          <img src={readingImg} alt="Reading" />
        </div>
      </div>
    </div>
  );
};

export default Services;
