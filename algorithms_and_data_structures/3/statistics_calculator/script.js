const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;
const testArr1 = [1, 2, 3, 4, 5];
const testArr2 = [1, 2, 3, 4, 5, 6];
const isEven = testArr2.length % 2 === 0;
console.log(isEven);
const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
console.log(oddListMedian);
const evenListMedian = getMean([testArr2[testArr2.length/2], testArr2[(testArr2.length/2) -1]]);
console.log(evenListMedian);

const getMedian = (array) => {
  const sorted = array.slice().sort((a, b) => a - b);
  return sorted.length % 2 === 0? getMean([sorted[sorted.length /2], sorted[(sorted.length /2) - 1]]) : sorted[Math.floor(sorted.length/2)];
};
const getMode = (array) => {
  const counts = {};
  array.forEach(el => counts[el] = (counts[el] || 0) + 1)
  if (new Set(Object.values(counts)).size === 1) {
    return null
  }
  const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
  const mode = Object.keys(counts).filter(el =>  counts[el] === counts[highest]);
  return mode.join(", ");  
};

const getRange = (array) => Math.max(...array) - Math.min(...array);
const getVariance = (array) => {
  const mean = getMean(array);
  const variance = array.reduce((acc, el) => {
    const difference = el - mean;
    const squared = difference ** 2;
    return acc + squared;
  }, 0) / array.length;
  return variance;
}
const getStandardDeviation = (array) => {
  const variance = getVariance(array);
  const standardDeviation = Math.pow(variance, 1/2);
}
const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));
  const mean = getMean(numbers);
  const median = getMedian(numbers);
  const mode = getMode(numbers);
  const range = getRange(numbers);
  document.querySelector("#mean").textContent = mean;
  document.querySelector("#median").textContent = median;
  document.querySelector("#mode").textContent = mode;
  document.querySelector("#range").textContent = range;
};