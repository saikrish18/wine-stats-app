import React from "react";
import {
  calculateGamma,
  calculateMean,
  calculateMedian,
  calculateMode,
} from "../utils";
import "../WineData.css";

const GammaStatsTable = ({ wineData }) => {
  const gammaData = wineData.map((entry) =>
    calculateGamma(entry.Ash, entry.Hue, entry.Magnesium)
  );

  // Extract class-wise data
  const classData = {};
  for (let i = 0; i < wineData.length; i++) {
    const wineClass = wineData[i].Alcohol;
    if (!classData[wineClass]) {
      classData[wineClass] = [];
    }
    classData[wineClass].push(gammaData[i]);
  }

  // Calculate and display mean, median, and mode for Gamma
  return (
    <table className="gamma-stats">
      <thead>
        <tr>
          <th>Measure</th>
          {Object.keys(classData).map((wineClass) => (
            <th key={wineClass}>Class {wineClass}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gamma Mean</td>
          {Object.keys(classData).map((wineClass) => (
            <td key={wineClass}>{calculateMean(classData[wineClass])}</td>
          ))}
        </tr>
        <tr>
          <td>Gamma Median</td>
          {Object.keys(classData).map((wineClass) => (
            <td key={wineClass}>{calculateMedian(classData[wineClass])}</td>
          ))}
        </tr>
        <tr>
          <td>Gamma Mode</td>
          {Object.keys(classData).map((wineClass) => (
            <td key={wineClass}>{calculateMode(classData[wineClass])}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default GammaStatsTable;
