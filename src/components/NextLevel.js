import React from "react";
import { Link } from "react-router-dom";
import nextLevelCoverImage from "../assets/next-level-main-image.png";

export default function NextLevel() {
  return (
    <div  className="next-level-container">
      <div className="next-level-content">
        <h3  id="nextLevel"  className="next-level-h3">Ready for the next level?</h3>
        <Link className="next-level-button" to="/sales">
          Talk to Sales
        </Link>
      </div>
      <div className="next-level-img-container">
        <img  id="nextLevel" src={nextLevelCoverImage} alt="next-level" />
      </div>
    </div>
  );
}
