// 1: Create a function that returns the last element of an array.

let arr = [1, 2, 3, 4, 5, 6]

function getLastElement(arr) {
    return arr[arr.length - 1]

}
let lastElement = getLastElement(arr)
// console.log(lastElement);


// 2: Find the combination of two arrays.

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]
let arr3 = [...arr1, ...arr2]
// console.log(arr3);


// 3: Create a random integer between 0 to 18.

let randomValue = parseInt(Math.random() * 19)
// console.log(randomValue);


/* 4: Greate a function that takes an array containing both numbers
and strings,and returns a new array containing only the string values.*/

let array = [1, 5, 3, "m", "a", 10];

let resultArray = array.filter(function (element) {
    return typeof element === "string"
})
// console.log(resultArray);


// 5: .Find the maximun number in array

let maxArr = [3, 65, 2, 8, 19]
// console.log(Math.max(...maxArr));


/* 6: Write a function that returns the length of a given object
(number of key)*/

const obj = {
    name: "veer",
    age: 21,
}

function getObjectLength(object) {
    return Object.keys(object).length
}
let length = getObjectLength(obj)
// console.log(length);


/* 7: In an array of objects filter out those objects
which have gender's value male.*/


let arrofobj = [

    {
        name: "veer",
        gender:"male"
    },

    {
        name:"harshit",
        gender:"male"
    },

    {
        name:"muskan",
        gender:"femail"
    },

]

let result = arrofobj.filter(function(element){
    return element.gender === "male";
    
})
// console.log(result);


/* 8: Given an array of strng. 
// return a new array where all string are in uppercase*/

let upperArray = ["radh","krishn","ram","sita"]

let newUpperArray = upperArray.map(function(value){
    return value.toUpperCase(upperArray)   
    
})
// console.log(newUpperArray);


// 9: Check if an object is empty or not

let emptyObj = {}

let keysArray = Object.keys(emptyObj)

let isEmptyArray = keysArray.length < 1;

if(isEmptyArray){
    console.log("object is empty");    
}else{
    console.log("object is not empty");    
}


// 10: Create an array of numbers and double each value using map().

let doubleArray = [1,2,3]

let newDoubleArray = doubleArray.map(function(vlaues){
    return vlaues*2
})
console.log(newDoubleArray);


// 11: Convert an array of string into a single comma-separated string.







