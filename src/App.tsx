import React from "react";
import { LifeGrid } from "./components/LifeGrid/LifeGrid";

function App() {
  return (
    <React.StrictMode>
      <h1>Hello</h1>
      <LifeGrid gridSize={10} />
    </React.StrictMode>
  );
}

export default App;
