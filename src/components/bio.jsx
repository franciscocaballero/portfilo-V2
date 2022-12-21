import React from "react";

export const Bio = () => {
  return (
    <div className="container container--bio flex-column ">
      <div className="child-padding">
        <div className="container--bio__image">
          <img src="images/me.png" alt="Profile" />
        </div>
        <div>
          <h1 className="container--bio__name">Francisco Caballero</h1>
          <p className="bio--container__bio">
            Hi👋🏼 I'm Francisco, a developer living in Arlington VA. I'm
            interested in<br></br>HTML, CSS, Javascript, ReactJS, NodeJS, and
            all things programming.
          </p>
        </div>
      </div>
    </div>
  );
};
