import React from "react";

export const Music = () => {
  return (
    <div className="container container--music ">
      <img
        className="container--music__image"
        src="/images/metro.png"
        alt="apple music logo"
      />

      <div className="container--music__bio">
        <img className="music--note" src="images/music.png" alt="music-note" />
        <h1 className="container--music__header marquee">
          <span>
            Superhero (Heroes & Villians) Superhero (Heroes & Villians)
          </span>
        </h1>
        <div className="music--box">
          <p className="container--music__artist">Metro Boomin</p>
          <div className="container--music__icon">
            <span className="container--music__bar" />
            <span className="container--music__bar" />
            <span className="container--music__bar" />
          </div>
        </div>
      </div>
    </div>
  );
};
