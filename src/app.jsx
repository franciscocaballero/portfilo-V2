import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import { Nav } from "./components/nav";
import { Grid } from "./components/grid";
import { Map } from "./components/map";

mapboxgl.accessToken = `pk.eyJ1IjoiY2lzY29jYWJhbGxlcm8iLCJhIjoiY2xiY3VlMHU3MDc2azNubzJndHpmMWxwNCJ9.UQO39BzfgajlPk6aXuSqcw`;

const App = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  // const [contacts, setContacts] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   axios(
  //     `https://api.mapbox.com/v4/mapbox.mapbox-streets-v8/12/1171/1566.mvt?style=mapbox://styles/mapbox/streets-v12@00&access_token=pk.eyJ1IjoiY2lzY29jYWJhbGxlcm8iLCJhIjoiY2xiY3VlMHU3MDc2azNubzJndHpmMWxwNCJ9.UQO39BzfgajlPk6aXuSqcw`
  //   )
  //     .then((response) => {
  //       setContacts(response.data);
  //       // setError(null);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });

  // if (error) return <p> Oppss.. something went wrong</p> && console.log(error);

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
      <Nav />
      <Grid />
    </div>
  );
};

export default App;
