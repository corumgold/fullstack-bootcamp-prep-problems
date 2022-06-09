// Write a function, veryOdd, that accepts an array of numbers as an argument. 
// It should return a new array that contains only the odd numbers from the given array. 
// veryOdd must not mutate the given array.

// let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
// let oddNums = veryOdd(allTheNums);

// console.log('oddNums:', oddNums); // [1, 3, 5, 7];
// console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]

function veryOdd(numArr) {
    let oddArr = [];
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 !== 0) {
            oddArr.push(numArr[i]);
        }
    } return oddArr
}