import React from "react";

export const Music = () => {
  return (
    <div className="container container--music flex flex-column">
      <div className="mc flex">
        <h1 className="container--music__header">
          Superhero (Heroes & Villians)
        </h1>
        <div className="container--music__icon">
          <span className="container--music__bar" />
          <span className="container--music__bar" />
          <span className="container--music__bar" />
        </div>
      </div>
      <p className="container--music__artist">Metro Boomin</p>
    </div>
  );
};
