var arr = [2,6,3,5]; //o/p = [1,5,2,4];
//map 
const subValue = arr.map((num) => num - 1);
console.log(subValue);
//for each loop
var arr1 = [];
arr.forEach(num =>{
    arr1.push(num - 1 );
});
console.log(arr1);
//for loop
let arr2 = [];
for(let i=0; i < arr.length; i++){
     arr2.push(arr[i] - 1);
}
console.log(arr2);