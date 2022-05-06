import React from "react";
import "./HomePage.scss";
import video from "../assets/cake.mp4";

export default function HomePage() {
  return (
    <div className="homePage">
      {/* <p>
        Funny Birthday -<br></br>Lucky Children
      </p> */}
      <video autoPlay muted loop id="myVideo">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
