import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>
          {" "}
          With more than 10 years of experience under our belts, we understand
          how to best serve our customers through tried and true service
          principles. Instead of following trends, we set them. We create food
          we’re proud to serve and deliver it fast, with a smile. No matter
          where you find us, we’re making sure each meal our customers enjoy is
          delicious and one-of-a-kind.
        </p>
      </div>
    </div>
  );
}

export default About;
