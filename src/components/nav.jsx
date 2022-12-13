import React, { useEffect, useState } from "react";
import { MenuItems } from "./MenuItems";
export const Nav = () => {
  // const [show, setShow] = useState(false);
  // const [show2, setShow2] = useState(false);
  // const [show3, setShow3] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  const handleClick = (e) => {
    console.log(e);
    setIsActive((current) => !current);
  };

  const onToggleClick = () => setIsActive(!isActive);
  const onToggleClick2 = () => setIsActive2(!isActive2);
  const onToggleClick3 = () => setIsActive3(!isActive3);
  const onToggleClick4 = () => setIsActive4(!isActive4);

  let toggleCheck = isActive ? " active" : "";
  console.log(isActive);
  return (
    <div>
      <nav>
        <p className="nav--logo">Cisco</p>

        <ul className="nav-menu">
          <li className="1" onClick={handleClick}>
            Home
          </li>
          <li className="1" onClick={handleClick}>
            Home
          </li>
          <li className="1" onClick={handleClick}>
            Home
          </li>
          <li className="1" onClick={handleClick}>
            Home
          </li>
        </ul>
        <a
          href="mailto:caballerofrancisco22@yahoo.com"
          target="_blank”"
          className="btn--contact"
        >
          Contact <span>→</span>
        </a>
      </nav>
    </div>
  );
};
