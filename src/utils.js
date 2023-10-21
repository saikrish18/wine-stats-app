// Calculate the Gamma property for each point
export function calculateGamma(Ash, Hue, Magnesium) {
  return ((Ash * Hue) / Magnesium).toFixed(3); // Round to 3 decimal places
}

// Calculate the mean of an array of numbers
export function calculateMean(data) {
  const sum = data.reduce((total, value) => total + parseFloat(value), 0);
  return (sum / data.length).toFixed(3);
}

// Calculate the median of an array of numbers
export function calculateMedian(data) {
  const sortedData = data
    .map((value) => parseFloat(value))
    .sort((a, b) => a - b);
  const middle = Math.floor(sortedData.length / 2);
  if (sortedData.length % 2 === 0) {
    return ((sortedData[middle - 1] + sortedData[middle]) / 2).toFixed(3);
  } else {
    return sortedData[middle].toFixed(3);
  }
}

// Calculate the mode of an array of numbers
export function calculateMode(data) {
  const numericData = data
    .filter((value) => !isNaN(parseFloat(value))) // Filter out non-numeric values
    .map((value) => parseFloat(value));

  if (numericData.length === 0) {
    return "N/A"; // Handle the case when there are no valid numeric values
  }

  const countMap = new Map();
  for (const value of numericData) {
    countMap.set(value, (countMap.get(value) || 0) + 1);
  }

  let mode;
  let maxCount = 0;
  for (const [value, count] of countMap) {
    if (count > maxCount) {
      maxCount = count;
      mode = value;
    }
  }

  return mode.toFixed(3);
}
