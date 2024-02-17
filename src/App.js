import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import Header from './component/header/Header';
import Home from "./pages/Home/Home";
import Error from "./component/error/Error";
import Connection from "./component/connection/Connection";
import NoFound from "./component/noFound/NoFound";
import Loading from "./component/loading/Loading";
// import Footer from "./component/footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/error" exact element={<Error />} />
        <Route path="/connection" exact element={<Connection />} />
        <Route path="/nofound" exact element={<NoFound />} />
        <Route path="/loading" exact element={<Loading />} />
      </Routes>
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;
