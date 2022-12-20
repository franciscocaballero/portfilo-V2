import React from "react";

export const Casestudy = () => {
  return (
    <div className="container container--casestudy ">
      <div className="casestudy--info">
        <img className="casestudy--logo" src="images/fork.png" alt="form" />
        <div className="casestudy--info-box">
          <h1>ForkyJS</h1>
          <p className="casestudy--bio">
            Lorem ipsum, dolor sit amet<br></br> consectetur adipisicing elit.
            Esse vitae
          </p>
          <a
            className="btn--casestudy "
            target="_blank”"
            href="https://fork-production.up.railway.app/#5ed6604591c37cdc054bcd09"
          >
            <span>
              <img
                className="btn__icon"
                src="images/right-arrow.png"
                alt="minus"
              />
            </span>
            <p>forkyJS</p>
          </a>
        </div>
      </div>
      <div className="casestudy--image"></div>
    </div>
  );
};
