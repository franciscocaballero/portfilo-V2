import React from "react";

export const Bio = () => {
  return (
    <div className="container container--bio flex-colum">
      <div className="container--bio__image">
        <img src="images/me.png" alt="Profile" />
      </div>
      <p className="bio-container__bio">
        Hi👋🏼 I'm <span className="container--bio__name">Francisco</span>, a
        developer from Arlington VA. I'm interested in Javascript, React,
        Reading, Health, Jiu jitsu, Design, and all things Web developement.
      </p>
    </div>
  );
};
