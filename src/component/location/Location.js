import React from 'react';
import "./location.css";
import location from "../../img/Location.png";

const Location = () => {
  return (
    <div className='location container'>
      <h6 className="subtitle">LOCATION</h6>
      <p className="title">🗺• Our Library Location</p>

      <div className="location-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.954978575853!2d71.66943888629753!3d41.004358597481975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4d9c5de40a73%3A0x81168fd9e4ad9b52!2sNamangan%20shahar!5e0!3m2!1sen!2s!4v1707687528260!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Location