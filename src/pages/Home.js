import React from "react";
import Music from "../components/music/Music";

const Home = () => {
  return (
    <div className="Home">
      <center>
        <h2>About me</h2>
        <img src="/akshay.jpg" alt="akshay" className="avatar" />
        <p className="about-me">Hi! I’m Akshay Pithadiya</p>
        <Music />
      </center>
    </div>
  );
};

export default Home;
