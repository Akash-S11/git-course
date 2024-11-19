let arr = [2, 6, 4, 7, 1, 9, 8]

let employees2 = [{
    "name" : "raj",
    "age" : 23,
    "salary" : 20000,
    "address" : {
        "city": "Bengaluru",
        "street": "7th B",
        "pincode" : 560072
    }
},
{
    "name" : "vikram",
    "age" : 26,
    "salary" : 70000,
    "address" : {
        "city": "pune",
        "street": "1st D",
        "pincode" : 560040
    }
},
{
    "name" : "rakash",
    "age" : 28,
    "salary" : 80096,
    "address" : {
        "city": "pune",
        "street": "9th A",
        "pincode" : 560040
    }
},
{
    "name" : "viky",
    "age" : 27,
    "salary" : 90000,
    "address" : {
        "city": "kolkata",
        "street": "2nd C",
        "pincode" : 560072
    }
}
]

// get details of citis f
const cities = [];
for(let i =0; i<employees2.length ; i++){
    cities.push(employees2[i].address.city)
}
//console.log(employees2[0].address.city)

console.log("cities");
console.log(cities); // ["bengaluru", "pune", "pune", "chennai"]

//1 way: remove Duplicate from array : brute force
let removeDuplicate = [];
for(let i = 0; i<cities.length; i++){
    if(removeDuplicate.indexOf(cities[i]) === -1){
        removeDuplicate.push(cities[i])
    }
}

console.log("removeDuplicate :");
console.log(removeDuplicate);

// 2 way: input: ["bengaluru", "pune", "pune", "chennai"]
// only works if array is sorted
let rmvDup = [];
for(let i = 0; i<cities.length; i++){
    if(cities[i] !== cities[i-1]){
        rmvDup.push(cities[i])
    }
}
console.log("rmvDup:");
console.log(rmvDup);

// 3 way: input: ["bengaluru", "pune", "pune", "chennai"]
let numArr = [2, 6, 4, 6, 1, 7, 4, 1]
obj = {};

for(let i of numArr){
    obj[i] = true;
}

let res = Object.keys(obj).map(Number);

console.log("obj:");
console.log(obj);
console.log("result:");
console.log(res);

// way 4
console.log("using set")
console.log([... new Set(numArr)])
console.log("using set")
console.log([... new Set(cities)])


//using map
const citiesMap = employees2.map ((obj) => {return obj.address.city})  

console.log("cities using map :");
console.log(citiesMap);