import React, { useState } from "react";
import "../styles/main.scss";
import { LifeGrid } from "../components/LifeGrid/LifeGrid";

function App() {
  const [gridSize, setGridSize]: number = useState(50);
  return (
    <React.StrictMode>
      <h1>Hello</h1>
      <LifeGrid gridSize={gridSize} />
    </React.StrictMode>
  );
}

export default App;
