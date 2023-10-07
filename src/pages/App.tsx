import React, { useState } from "react";
import "../styles/main.scss";
import { LifeGrid } from "../components/LifeGrid/LifeGrid";

function App() {
  const [gridSize, setGridSize]: number = useState(30);
  return (
    <React.StrictMode>
      <h1>Welcome to the Game of Life</h1>
      <LifeGrid gridSize={gridSize} />
    </React.StrictMode>
  );
}

export default App;
