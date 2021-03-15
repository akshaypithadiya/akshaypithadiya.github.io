import React from "react";
import "./Music.scss";

const Music = () => {
  const musicIconStyle = {
    margin: "0px 6px",
    fontSize: "28px",
    color: "#0663ff",
  };

  return (
    <div className="Music">
      <ion-icon style={musicIconStyle} name="musical-notes"></ion-icon>
      <span style={{ padding: "5px" }}>
        <a href="https://www.youtube.com/watch?v=gAjR4_CbPpQ" target="_blank">
          Daft Punk - Harder Better Faster
        </a>
      </span>
      <ion-icon style={musicIconStyle} name="musical-notes"></ion-icon>
    </div>
  );
};

export default Music;
