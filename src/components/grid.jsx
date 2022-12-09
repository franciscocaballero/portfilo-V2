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
        <div className="grid-item grid-row-span-1">
          <div className="radius">
            <Map
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
          </div>
        </div>
        <div className="item-1">Hello</div>
      </div>
    </div>
  );
};
