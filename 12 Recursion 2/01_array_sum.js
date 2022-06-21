// Write a function, arraySum, that accepts an array of numbers as an argument and returns the sum
// of all the numbers in the array (no matter how nested!).

let solveCount = 2;

function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        if (Array.isArray(element)) {
            sum += arraySum(element);
        } else {
            sum += element;
        }
    } return sum;
}

arraySum([1, [2, 3, [4]]]) // => 10