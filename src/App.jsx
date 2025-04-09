import React from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import MyPosts from "./components/Profile/MyPosts/Post/MyPosts";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="content-2">
        <Navbar />
        <Profile />
        <MyPosts />
      </div>
    </div>
  );
};

export default App;
