import React, { useRef, useEffect, useState } from "react";
import { render } from "react-dom";
import Map, { Marker } from "react-map-gl";

// import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiY2lzY29jYWJhbGxlcm8iLCJhIjoiY2xiY3VlMHU3MDc2azNubzJndHpmMWxwNCJ9.UQO39BzfgajlPk6aXuSqcw";

export const Mapbox = () => {
  const [viewState, setViewState] = React.useState({
    longitude: -77.0408,
    latitude: 38.8915,
    zoom: 10.5,
  });

  const hello = () => {
    console.log("hello");
  };
  return (
    <div className="container--mapbox">
      <Map
        className="container"
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        // onMove={hello}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        style={{ width: 400, height: 400 }}
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker
          // longitude={viewState.longitude}
          // latitude={viewState.latitude}
          {...viewState}
          style={{ transform: "translate(0)" }}
          anchor="bottom"
        >
          <img
            src="images/me.png"
            alt="Mapmark Image"
            style={{ width: "30px" }}
          />
        </Marker>
      </Map>
      <a className="btn btn--white" target="_blank”" href="#" onClick={hello}>
        <img className="btn__icon" src="images/zoom-out.png" alt="minus" />
      </a>
    </div>
  );
};
