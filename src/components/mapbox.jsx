import React, { useRef, useEffect, useState } from "react";
import Map from "react-map-gl";
import ReactMapGL, { Marker } from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiY2lzY29jYWJhbGxlcm8iLCJhIjoiY2xiY3VlMHU3MDc2azNubzJndHpmMWxwNCJ9.UQO39BzfgajlPk6aXuSqcw";

export const Mapbox = () => {
  const [viewState, setViewState] = React.useState({
    longitude: -77.0408,
    latitude: 38.8915,
    zoom: 13.5,
  });
  return (
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
  );
};
