import React, { useRef, useEffect, useState } from "react";
import Map from "react-map-gl";
import ReactMapGL, { Marker } from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiY2lzY29jYWJhbGxlcm8iLCJhIjoiY2xiY3VlMHU3MDc2azNubzJndHpmMWxwNCJ9.UQO39BzfgajlPk6aXuSqcw";

export const Grid = () => {
  const [viewState, setViewState] = React.useState({
    longitude: -77.0408,
    latitude: 38.8915,
    zoom: 13.5,
  });
  return (
    <div className="container">
      <div className="grid">
        <div className="bio-container radius flex-colum">
          <div className="bio-container__image">
            <img className="me" src="images/me.png" alt="Profile" />
          </div>
          <p className="bio-container__bio">
            Hi👋🏼 I'm{" "}
            <span style={{ fontSize: "30px", fontWeight: "bold" }}>
              Francisco
            </span>
            , a developer from Arlington VA. I'm interested in Javascript,
            React, Reading, Health, Jiu jitsu, Design, and all things Web
            developement.
          </p>
        </div>
        <div className=" social-item-container social-item-container__twitter radius flex">
          <img
            className="social-icon"
            src="images/twitter.png"
            alt="Twitter bird"
          />
          <a
            className="link-btn"
            target="_blank”"
            href="https://twitter.com/ciscocaballero"
          >
            <img
              className="link-btn-icon"
              src="images/right-arrow.png"
              alt="right-arrow"
            />
          </a>
        </div>
        <div className="social-item-container social-item-container__github radius flex">
          <img
            className="social-icon"
            src="images/github.png"
            alt="Twitter bird"
          />
          <a
            className="link-btn"
            target="_blank”"
            href="https://github.com/franciscocaballero"
          >
            <img
              className="link-btn-icon"
              src="images/right-arrow.png"
              alt="right-arrow"
            />
          </a>
        </div>
        <div className="mapbox-container">
          <Map
            className="radius"
            {...viewState}
            onMove={(evt) => setViewState(evt.viewState)}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            style={{ width: 300, height: 300 }}
            mapboxAccessToken={MAPBOX_TOKEN}
          >
            <Marker longitude={-77.0408} latitude={38.8915} anchor="bottom">
              <img
                className="me"
                src="images/me.png"
                alt="Profile"
                style={{ width: "20px" }}
              />
            </Marker>
          </Map>
          <a className="link-btn" target="_blank”" href="#">
            <img
              className="link-btn-icon"
              src="images/zoom-out.png"
              alt="minus--"
            />
          </a>
        </div>
        <div className="project-container radius">
          <a className="link-btn" target="_blank”" href="#">
            <img
              className="link-btn-icon"
              src="images/zoom-out.png"
              alt="minus"
            />
          </a>
        </div>
        <div className="project-container radius">
          <a className="link-btn" target="_blank”" href="#">
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
