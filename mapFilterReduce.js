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

//let arr = [2, 6, 4, 7, 1, 9, 8]
//without using built in function 
// greater than 6 
// expected output [7, 9, 8]

const filterGreater = [];
for(let i=0; i<arr.length; i++){
    if(arr[i] > 6 )
        filterGreater.push(arr[i]);
}

console.log("Array greater than six : ");
console.log(filterGreater.sort());


// using built method filter
const filterSix = (element) => {
    if(element > 6){
        return element
    }
}

const filterGreaterThanSix = arr.filter(filterSix);

console.log("Array greater than six using filter  :");
console.log(filterGreaterThanSix.sort());


//using for loop let arr = [2, 6, 4, 7, 1, 9, 8]
//decrement 
//expected o/p [1, 5, 3, 6, 0, 8, 7]

const decrementByOne = [];
for(let i = 0 ; i<arr.length ; i++){
    decrementByOne.push(arr[i] - 1)
}

console.log("decrement By One : ")
console.log(decrementByOne)

//using map
const reduceByOne = (element) => {
    element = element - 1
    return element
};

const decrementOne = arr.map(reduceByOne);

console.log("decrement by one using map : ");
console.log(decrementOne);


//
const cities = [];
for(let i =0; i<employees2.length ; i++){
    cities.push(employees2[i].address.city)
}
//console.log(employees2[0].address.city)

console.log("cities");
console.log(cities);

const cities1 = employees2.map ((obj) => {return obj.address.city})  

console.log("cities 1 :");
console.log(cities1);

// get all emp names whose salry is greater than 20000

// ["vikram", "rakash", "viky"]

const filterSal = employees2.filter(obj => {
    return (obj.salary > 20000)
});
const filterSal1 = filterSal.map(element => {
    return element.name;
})

const filteredNames = employees2.filter(obj => obj.salary >20000).map(element => element.name);

console.log(filterSal)
console.log(filterSal1)
console.log(filteredNames)


//using for loop 

const result = [];
for(let i = 0; i < employees2.length; i++){
    if(employees2[i].salary > 20000){
        result.push(employees2[i].name);
    }
}
console.log("using loop")
console.log(result);

//total salary : 2500000

let totalSalary = 0; // [ 20000, 70000, 40000, 340000]
for(let i = 0; i< employees2.length ; i++){
    totalSalary += employees2[i].salary ;
}

console.log(totalSalary);

let totalSal = employees2.reduce((acc, curr) => {
    return acc += curr.salary;
    //return acc
}, 0)

console.log(totalSal);