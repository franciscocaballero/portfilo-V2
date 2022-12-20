import React, { useEffect, useState } from "react";
import { MenuItems } from "./MenuItems";

export const Nav = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const parent = document.getElementById("parent");
    let childNode = parent.childNodes;
    var btnsArr = Array.prototype.slice.call(childNode);

    btnsArr.forEach((item) => {
      item.addEventListener("click", () => {
        btnsArr.forEach((i) => {
          i.classList.remove("active");
        });
        item.classList.add("active");
      });
    });
    //   if (isActive) {
    //     document
    //       .querySelector(".nav-menu_option:nth-child(1)")
    //   // if (!isActive) {
    //   //   document.querySelector(".nav-menu_option").classList.remove("active");
    //   // }

    //   /// Add a swtich
    //   // }, [isActive]);
    //   // const onSetActiveMenuItem = (item) => {
    //   //   if (item !== isActive) {
    //   //     setIsActive(item);
    //   //   } else {
    //   //     setIsActive(""); // handle click on currently active item
    //   //   }
  }, []);

  // const parent = document.getElementById("parent");
  // let childNode = parent.childNodes;
  // var btnsArr = Array.prototype.slice.call(childNode);
  // console.log(btnsArr);
  // childNodes.forEach((item) => {
  //   // console.log(item);

  //   item.addEventListener("click", () => {
  //     item.classList.add("active");
  //   });
  // });

  // const onToggleClick = () => {
  //   setIsActive(!isActive);
  //   console.log(isActive);
  // };

  return (
    <div>
      <nav className="">
        <div className="nav--container ">
          <p className="nav--logo">cisco</p>

          <ul className="nav-menu" id="parent">
            {MenuItems.map((item, index) => {
              return (
                <li
                  key={index}
                  href={item.url}
                  className={`${item.cName} `}
                  // onClick={onToggleClick}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
          <a
            href="mailto:caballerofrancisco22@yahoo.com"
            target="_blank”"
            className="btn--contact"
          >
            Contact <span>→</span>
          </a>
        </div>
      </nav>
    </div>
  );
};
