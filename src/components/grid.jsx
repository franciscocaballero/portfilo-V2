import React from "react";

export const Grid = () => {
  return (
    <div className="container">
      <div className="grid">
        <div className="grid-item grid-col-span-2">
          <div className="bio-container radius flex-colum">
            <div className="bio-container__image">
              <img className="me" src="images/me.png" alt="Profile" />
            </div>
            <p>
              Hi👋🏼 I'm{" "}
              <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                Francisco
              </span>
              , a developer from Arlington VA. I'm interested in Javascript,
              React, Reading, Health, Jiu jitsu, Design, and all things Web
              developement.
            </p>
          </div>
        </div>
        <div className="grid-item grid-col-span-1">
          <div className=" social-item-container social-item-container__twitter radius flex">
            <img
              className="twitter-icon"
              src="images/twitter.png"
              alt="Twitter bird"
            />
          </div>
        </div>
        <div className="grid-item grid-col-span-1">
          <div className=" social-item-container social-item-container__twitter radius flex">
            <img
              className="twitter-icon"
              src="images/github.png"
              alt="Twitter bird"
            />
          </div>
        </div>
        <div className="grid-item grid-row-span-2">Hello</div>
        <div className="item-1">Hello</div>
      </div>
    </div>
  );
};
