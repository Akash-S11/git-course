// Calculating the Average Using reduce

// Calculate the average score from an array of scores.
 // Output: 84


const scores = [70, 85, 90, 95, 80];

const countFrequency = (scores) =>{
    return scores.reduce((acc,curr,index,arr) => {
    acc += curr;
    if (index == arr.length-1){
        return acc/ arr.length;
    }
    return acc;
},0);
}

console.log(countFrequency(scores));