// Write a function, veryOdd, that accepts an array of numbers as an argument. 
// It should return a new array that contains only the odd numbers from the given array. 
// veryOdd must not mutate the given array.

// let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
// let oddNums = veryOdd(allTheNums);

// console.log('oddNums:', oddNums); // [1, 3, 5, 7];
// console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]

let solveCount = 2;

function veryOdd(arr) {
    let oddArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            oddArr.push(arr[i]);
        }
    } return oddArr;
}