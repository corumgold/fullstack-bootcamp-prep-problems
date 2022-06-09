// Write a function myForEach that accepts an array and a callback function as arguments.
// The behavior of myForEach should mirror the functionality of the native .forEach() array method as closely as possible.

// let sum = 0;

// function addToSum(num) {
//     sum += num;
// }

// let nums = [1, 2, 3];

// myForEach(nums, addToSum);

// console.log(sum); // 6

function myForEach(array, func) {
    for (let i = 0; i < array.length; i++){
        func(array[i], array.indexOf(array[i]));
    } 
}