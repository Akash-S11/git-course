// Combining filter + reduce: Summing Even Numbers

// Filter out the odd numbers and then sum only the even numbers in an array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for loop
let output = 0;
for(let i = 0; i <= numbers.length -1 ; i++){
    if (numbers[i] % 2 == 0){
        output += numbers[i];
    }
}
console.log(output);

//Filter and reduce
const evenSum = numbers.filter(number => number % 2 === 0)
    .reduce((acc, curr) => acc += curr, 0);

console.log(evenSum);

