// Write a function, reverseArray, that accepts an array as an argument and returns a reversed copy of that array. Use recursion.

function reverseArray(arr) {
    debugger;
    let lastEle = arr[arr.length - 1];
    if (arr.length === 1) {
        return lastEle;
    } else {
        return [lastEle].concat(reverseArray(arr.slice(0, - 1))); //slice doesn't modify the original array
    }
}

let arr = [1, 2, 3, 4]
let reversedArr = reverseArray(arr);

console.log(reversedArr) // [4,3,2,1]
console.log(arr) // [1,2,3,4]