import React, { useRef, useEffect, useState } from "react";
import { Nav } from "./components/nav";
import { Grid } from "./components/grid";

const App = () => {
  return (
    <div>
      <Nav />
      <Grid />
    </div>
  );
};

export default App;
