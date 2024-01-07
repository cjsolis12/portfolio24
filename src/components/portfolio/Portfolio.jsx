import React from "react";
import "./portfolio.scss";
const Portfolio = () => {
  return (
    <>
      <div
        className="portfolio-section"
        style={{
          background: "linear-gradient(180deg, #111132, #2b2669)",
          overflow: "hidden",
        }}
      >
        <div className="portfolio-title"> My Work</div>
        <div className="card-container">
          <div className="card">
        <div className="card-main">
        <img src="./codeflix.png" alt="mvc-project" />
        </div>
          </div>
            <div className="card">Hi</div>
            <div className="card">Hi</div>
            <div className="card">Hi</div>
          
        </div>
      </div>
    </>
  );
};

export default Portfolio;
