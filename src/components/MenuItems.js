const selectAllContainers = () => {
  let containers = document.querySelectorAll(".container");
  containers.forEach((i) => {
    i.classList.remove("grid-item1");
    i.classList.remove("grid-item2");
    i.classList.remove("grid-item3");
  });
};

export const MenuItems = [
  {
    title: "All",
    url: "#",
    cName: "nav-menu_option",
    click: () => {
      let container = document.querySelectorAll(".container--bio");
      if (container.length > 0) {
        selectAllContainers();
        container[0].classList.add("grid-item1");
      }
    },
  },
  {
    title: "About",
    url: "#",
    cName: "nav-menu_option",
    click: () => {
      let container = document.querySelectorAll(".container--bio");
      if (container.length > 0) {
        selectAllContainers();
        container[0].classList.add("grid-item1");
      }
    },
  },
  {
    title: "Projects",
    url: "#",
    cName: "nav-menu_option",
    click: () => {
      let container = document.querySelectorAll(".container--casestudy");
      if (container.length > 0) {
        selectAllContainers();
        container[0].classList.add("grid-item1");
        container[1].classList.add("grid-item3");
      }
    },
  },
  {
    title: "Media",
    url: "#",
    cName: "nav-menu_option",
    click: () => {
      let container = document.querySelectorAll(".container--social");
      if (container.length > 0) {
        selectAllContainers();
        container[0].classList.add("grid-item1");
        container[1].classList.add("grid-item2");
      }
    },
  },
];
