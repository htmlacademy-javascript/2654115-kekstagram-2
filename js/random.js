const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function getRandomUnqNumber(min, max) {
  const generatedNumber = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (generatedNumber.length >= (max - min + 1)) {
    }
    while (generatedNumber.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    generatedNumber.push(currentValue);
    return currentValue;

  };
}

export { getRandomArrayElement, getRandomUnqNumber, getRandomInteger };
