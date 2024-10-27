// Here are some tricky examples to help understand map, reduce, and filter in JavaScript:

// 1. Flattening an Array of Arrays (reduce)
const nestedArr = [ [3, 4], [5,  [6, 7]], 7 , 9];

const flattened = nestedArr.reduce((acc, curr) => acc.concat(Array.isArray(curr) ? curr.flat(Infinity) : curr), []);
console.log(flattened); 


//Array prototype - .flat()
const flattened1 = nestedArr.flat(Infinity);

console.log(flattened1);