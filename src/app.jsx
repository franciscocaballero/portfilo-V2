import React, { useRef, useEffect, useState } from "react";
import { Nav } from "./components/nav";
import { Grid } from "./components/grid";
import { createContext } from "react";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  const log = (e) => {
    console.log("hello");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Nav />
        <Grid toggleTheme={toggleTheme} checked={theme === "dark"} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
