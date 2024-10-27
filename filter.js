let arr = [2, 11, 3, 6, 7];

//map
const oddNumbers = arr.filter((num) => num % 2 != 0);
console.log(oddNumbers);
//for
let arr1 = [];
for(let i =0; i < arr.length; i++){
    if(arr[i] % 2 != 0){
        arr1.push(arr[i]);
    }
}
console.log(arr1);

//for each
let arr2 = [];
arr.forEach((num) => {
    if (num % 2 != 0)
        arr2.push(num);
});
 console.log(arr2);