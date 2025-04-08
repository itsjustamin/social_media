import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Nav";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="content-2">
        <Navbar />
        <Profile />
      </div>
    </div>
  );
};

export default App;
