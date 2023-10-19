import React, { useState, useEffect } from 'react';
import './WineData.css';

const WineDataDisplay = () => {
  const [wineData, setWineData] = useState([]);

  useEffect(() => {

    fetch('/Wine-Data.json')
      .then((response) => response.json())
      .then((data) => setWineData(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  const calculateMean = (column) => {
    const values = wineData.map((entry) => entry[column]);
    const sum = values.reduce((total, value) => total + value, 0);
    return sum / values.length;
  };

  const calculateMedian = (column) => {
    const values = wineData.map((entry) => entry[column]).sort((a, b) => a - b);
    const mid = Math.floor(values.length / 2);
    return values.length % 2 !== 0 ? values[mid] : (values[mid - 1] + values[mid]) / 2;
  };

  const calculateStandardDeviation = (column) => {
    const values = wineData.map((entry) => entry[column]);
    const mean = calculateMean(column);
    const squaredDifferences = values.map((value) => Math.pow(value - mean, 2));
    const variance = squaredDifferences.reduce((total, value) => total + value, 0) / values.length;
    return Math.sqrt(variance);
  };

  return (
    <div>
      <h1>Wine Data</h1>
      <table>
        <thead>
          <tr>
            <th>Column</th>
            <th>Mean</th>
            <th>Median</th>
            <th>Standard Deviation</th>
          </tr>
        </thead>
        <tbody>
          {wineData && wineData.length > 0 && Object.keys(wineData[0]).map((column) => (
            <tr key={column}>
              <td>{column}</td>
              <td>{calculateMean(column).toFixed(2)}</td>
              <td>{calculateMedian(column).toFixed(2)}</td>
              <td>{calculateStandardDeviation(column).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WineDataDisplay;
