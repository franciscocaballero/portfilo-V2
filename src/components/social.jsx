import React from "react";

export const Social = (props) => {
  return (
    <div className={`container container--social ${props.className} flex`}>
      <img
        className="container--social__icon"
        src={props.imgSrc}
        alt="Twitter bird"
      />
      <a className="btn btn--white" target="_blank”" href={props.link}>
        <img
          className="btn__icon"
          src="images/right-arrow.png"
          alt="right-arrow"
        />
      </a>
    </div>
  );
};
