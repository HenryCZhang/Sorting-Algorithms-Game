import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Background.css";
import { Button } from "react-bootstrap";

import desktopImg from "../assets/img/desktop.png";

export default function LevelMain() {
  React.useEffect(() => {
    if (localStorage.getItem("selectedAlgorithm") === null) {
      localStorage.setItem("selectedAlgorithm", "ms");
    }
    // Get all the clock elements
    // let element = document.getElementsByClassName("clock")[0].children;
    // actualTime(element);
  });

  return (
    <div>
      <div className="LevelMain">
        <h1>Welcome to Sorting Algorithms Playground</h1>

        <h3 style={{ marginTop: "40px", marginBottom: "10px" }}>
          This website is dedicated to passionate sorting algorithm learners
          like you!
        </h3>
        <h4 style={{ marginBottom: "20px" }}>
          we gamified the sorting algorithm learning experience where you can
          progress at your own pace through different levels.{" "}
        </h4>
      </div>

      <img
        src={desktopImg}
        alt="desktopImg"
        className="img-fluid"
        style={{ width: "40rem" }}
      />
      <div>
        <Button id="homeBtn" href={"/level1"}>
          View Demo
        </Button>
      </div>
    </div>
  );
}
