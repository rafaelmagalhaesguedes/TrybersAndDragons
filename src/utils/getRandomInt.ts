// getRandomInt
// Returns a random integer between the specified values.
// The value is no lower than min, and is less than (but not equal to) max.
const getRandomInt = (min: number, max: number) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomInt;