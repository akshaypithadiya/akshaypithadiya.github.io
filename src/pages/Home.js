import React from "react";
import Music from "../components/music/Music";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = () => {
  return (
    <div className="Home">
      <center>
        <h2>About me</h2>
        <LazyLoadImage alt="akshay" src="/akshay.jpg" className="avatar" />
        <p className="about-me">Hi! I’m Akshay Pithadiya</p>
        <Music />
      </center>
    </div>
  );
};

export default Home;
