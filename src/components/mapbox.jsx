import React from "react";
import Map, { Marker, NavigationControl } from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiY2lzY29jYWJhbGxlcm8iLCJhIjoiY2xiY3VlMHU3MDc2azNubzJndHpmMWxwNCJ9.UQO39BzfgajlPk6aXuSqcw";

export const Mapbox = () => {
  const [viewState, setViewState] = React.useState({
    longitude: -77.0408,
    latitude: 38.8915,
    zoom: 13,
  });

  return (
    <div className="container--mapbox">
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        dragPan={false}
        scrollZoom={false}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        style={{
          borderRadius: "30px",
          boxShadow: "0px 3px 15px rgba(166, 166, 166, 0.2)",
        }}
        mapboxAccessToken={MAPBOX_TOKEN}
        className="container"
      >
        <Marker longitude={-77.0408} latitude={38.8915} scale={2}>
          <img
            src="images/me.png"
            alt="Mapmark Image"
            style={{ width: "40px" }}
          />
        </Marker>
        <NavigationControl showCompass={false} position={"bottom-left"} />
      </Map>
    </div>
  );
};
