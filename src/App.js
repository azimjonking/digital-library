import React from 'react';
import './App.css';
// import Header from './component/header/Header';
import Main from './component/main/Main';
import Features from './component/features/Features';
import Services from './component/services/Services';
import Reviews from './component/reviews/Reviews';
import Location from './component/location/Location';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Main />
      <Features />
      <Services />
      <Reviews />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
