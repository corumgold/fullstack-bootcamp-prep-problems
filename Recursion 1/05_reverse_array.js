// Write a function, reverseArray, that accepts an array as an argument and returns a reversed copy of that array. Use recursion.

let solveCount = 1;

const reverseArray = (arr) => {
    if (arr.length === 1) {
        return arr[0];
    }

    let lastEle = arr[arr.length - 1];
    return [lastEle].concat(reverseArray(arr.slice(0, arr.length - 1)));
}

let arr = [1, 2, 3, 4]
let reversedArr = reverseArray(arr);

console.log(reversedArr) // [4,3,2,1]
console.log(arr) // [1,2,3,4]