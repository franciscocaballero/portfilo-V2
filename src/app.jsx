import React, { useRef, useEffect, useState } from "react";

import Map from "react-map-gl";
import ReactMapGL, { Marker } from "react-map-gl";

import { Nav } from "./components/nav";
import { Grid } from "./components/grid";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiY2lzY29jYWJhbGxlcm8iLCJhIjoiY2xiY3VlMHU3MDc2azNubzJndHpmMWxwNCJ9.UQO39BzfgajlPk6aXuSqcw"; // Set your mapbox token here

const App = () => {
  return (
    <div>
      <Map
        initialViewState={{
          latitude: 38.8915,
          longitude: -77.0408,
          zoom: 12,
        }}
        style={{ width: 800, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
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
      <Nav />
      <Grid />
    </div>
  );
};

export default App;
