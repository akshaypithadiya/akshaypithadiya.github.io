import React from "react";
import Music from "../components/music/Music";

const Home = () => {
  return (
    <div className="Home">
      <center>
        <h2>About me</h2>
        <img src="/akshay.jpg" className="avatar" />
        <h3>Hi! I'm Akshay Pithadiya</h3>
        <Music />
      </center>
    </div>
  );
};

export default Home;
