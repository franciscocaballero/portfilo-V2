import React, { useRef, useEffect, useState } from "react";
import { Nav } from "./components/nav";
import { Grid } from "./components/grid";
import { createContext } from "react";

export const ThemeContect = createContext(null);

const App = () => {
  return (
    <div>
      <Nav />
      <Grid />
    </div>
  );
};

export default App;
