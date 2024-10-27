let arr1 = [2, 4, 5, - 1, 10, 6, 18];
let arr = [-10,-8,-6];

// reduce max
const max = arr.reduce((acc, curr) => {
    if (curr >  acc){ // 2 < 0
        acc=curr;
    }//2<0 =T
    return acc;
},-Infinity);

//find max using for loop
const maximum = (arr)=>{
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max) // -10 > -infinity
          max = arr[i];
        }
        return max;
}

console.log(maximum(arr));

//find max using forEach loop
const maximumForEach = (arr)=>{
    let max = -Infinity;
    arr.forEach((num)=>{
        if(num > max) // -10 > -infinity
           max = num;
        });
        return max;
}

//min using reduce
console.log(maximumForEach(arr));
const min = arr.reduce((acc, curr) => {
    if (curr <  acc){ // 2 < 0
        acc=curr;
    }//2<0 =T
    return acc;
},Infinity);

console.log(min);