import React, { useRef, useEffect, useState } from "react";
import { Bio } from "./bio";
import { Social } from "./social";
import { Mapbox } from "./mapbox";
import { Casestudy } from "./casestudy";
import { Switch } from "./switch";
import { Music } from "./music";

export const Grid = (props) => {
  return (
    <div className="container-main">
      <div className="grid">
        <Bio />
        <Mapbox />
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
        <Switch toggleTheme={props.toggleTheme} checked={props.checked} />
        <Casestudy
          logo="images/fork.png"
          title="ForkyJS"
          description="ForkyJS uses Javscript to interact with the fokry API and display the information to the user in a user-friendly interface."
          link="https://fork-production.up.railway.app/#5ed6604591c37cdc054bcd09"
          linkTitle="forkyJS"
          backgroundImageClass="casestudy--image"
          backgroundImage="images/pizza.png"
        />
        <Casestudy
          logo="images/loop.png"
          title="LoopStudio"
          description="LoopStudio uses CSS Grid to display the information to the user in a user-friendly interface."
          link="https://loopingsstudios.netlify.app"
          linkTitle="LStudio"
          backgroundImageClass="casestudy--image"
          backgroundImage="images/loopstudio.png"
        />

        <Music />
        <Social
          link="https://www.linkedin.com/in/francisco-caballero/"
          imgSrc="images/linkedin.png"
          className="bgColor--dark-blue"
        />
      </div>
    </div>
  );
};
