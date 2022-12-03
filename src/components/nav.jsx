import React from "react";

export const Nav = () => {
  return (
    <div>
      <nav>
        <p className="nav-logo">Cisco</p>
        <ul className="nav-menu">
          <li className="nav-menu_option">All</li>
          <li className="nav-menu_option">About</li>
          <li className="nav-menu_option">Projects</li>
          <li className="nav-menu_option nav-menu_option--hightlight">Media</li>
        </ul>
        <p className="contact-button">Contact</p>
      </nav>
    </div>
  );
};
