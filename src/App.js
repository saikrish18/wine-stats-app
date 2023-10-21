import React from "react";
import WineStatsTable from "./components/WineStatsTable";
import GammaStatsTable from "./components/GammaStatsTable";
import wineData from "./Wine-Data.json";

function App() {
  return (
    <div className="app">
      <h1>Wine Data Statistics</h1>
      <div className="stats-container">
        <WineStatsTable wineData={wineData} />
        <GammaStatsTable wineData={wineData} />
      </div>
    </div>
  );
}

export default App;
