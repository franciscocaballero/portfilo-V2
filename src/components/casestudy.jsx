import React from "react";
import { projectItems } from "./projectItems";

export const Casestudy = (props) => {
  return (
    <div className="container container--casestudy ">
      <div className="casestudy--info">
        <img className="casestudy--logo" src={props.logo} alt="form" />
        <div className="casestudy--info-box">
          <h1>{props.title}</h1>
          <p className="casestudy--bio">{props.description}</p>
          <a className="btn--casestudy " target="_blank”" href={props.link}>
            <span>
              <img
                className="btn__icon"
                src="images/right-arrow.png"
                alt="minus"
              />
            </span>
            <p>{props.linkTitle}</p>
          </a>
        </div>
      </div>
      <div className={props.backgroundImageClass}></div>
    </div>
  );
};
