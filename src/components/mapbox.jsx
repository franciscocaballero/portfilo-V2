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
        className="container"
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        // setViewState(evt.viewState);
        // console.log(evt);

        dragPan={false}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        style={{ width: 400, height: 400 }}
        mapboxAccessToken={MAPBOX_TOKEN}
        // minZoom={10}
        maxZoom={18}
        // touchPitch={false}
        // touchZoomRotate={!true}
      >
        <Marker longitude={-77.0408} latitude={38.8915} scale={0}>
          <img
            src="images/me.png"
            alt="Mapmark Image"
            style={{ width: "40px" }}
          />
        </Marker>
        <NavigationControl showCompass={false} />
      </Map>
      <a
        className="btn btn--white"
        href="#"
        onClick={() => setViewState({ zoom: 9 })}
      >
        <img className="btn__icon" src="images/zoom-out.png" alt="minus" />
      </a>
      <a
        className="btn btn--zoom"
        href="#"
        onClick={() => setViewState({ zoom: 13 })}
      >
        <img className="btn__icon" src="images/plus3.png" alt="minus" />
      </a>
    </div>
  );
};
