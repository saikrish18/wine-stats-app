import React from "react";
import { calculateMean, calculateMedian, calculateMode } from "../utils";
import "../WineData.css";

const WineStatsTable = ({ wineData }) => {
  // Extract Flavanoids data for each class
  const classData = {};
  for (const entry of wineData) {
    const wineClass = entry.Alcohol;
    const flavanoids = entry.Flavanoids;

    if (!classData[wineClass]) {
      classData[wineClass] = [];
    }

    classData[wineClass].push(flavanoids);
  }

  // Calculate and display mean, median, and mode for Flavanoids
  return (
    <table className="wine-stats">
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
          <td>Flavanoids Mean</td>
          {Object.keys(classData).map((wineClass) => (
            <td key={wineClass}>{calculateMean(classData[wineClass])}</td>
          ))}
        </tr>
        <tr>
          <td>Flavanoids Median</td>
          {Object.keys(classData).map((wineClass) => (
            <td key={wineClass}>{calculateMedian(classData[wineClass])}</td>
          ))}
        </tr>
        <tr>
          <td>Flavanoids Mode</td>
          {Object.keys(classData).map((wineClass) => (
            <td key={wineClass}>{calculateMode(classData[wineClass])}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default WineStatsTable;
