import React, { useRef, useEffect, useState } from "react";
import { Bio } from "./bio";
import { Social } from "./social";
import { Mapbox } from "./mapbox";
import { Casestudy } from "./casestudy";
import { Switch } from "./switch";
import { Music } from "./music";

export const Grid = () => {
  return (
    <div className="container-main">
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
        <Casestudy />
        <Switch />
        <Music />
        <Music />
      </div>
    </div>
  );
};
