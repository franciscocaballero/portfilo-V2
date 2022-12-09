import React, { useRef, useEffect, useState } from "react";
import { Bio } from "./bio";
import { Social } from "./social";
import { Mapbox } from "./mapbox";

export const Grid = () => {
  const [viewState, setViewState] = React.useState({
    longitude: -77.0408,
    latitude: 38.8915,
    zoom: 13.5,
  });
  return (
    <div className="container">
      <div className="grid">
        <Bio />
        <Social
          link="https://twitter.com/ciscocaballero"
          imgSrc="images/twitter.png"
          className="bgColor--blue"
        />
        <Social
          link="https://github.com/franciscocaballero"
          imgSrc="images/github.png"
          className="bgColor--purple"
        />
        <Mapbox />

        <div className="project-container radius">
          <a className="link-btn" target="_blank”" href="google.com">
            <img
              className="link-btn-icon"
              src="images/zoom-out.png"
              alt="minus"
            />
          </a>
        </div>
        <div className="project-container radius">
          <a className="link-btn" target="_blank”" href="google.com">
            <img
              className="link-btn-icon"
              src="images/zoom-out.png"
              alt="minus"
            />
          </a>
        </div>
        <div className="darkmode-container radius">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <div className="applemusic-container radius">
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};
