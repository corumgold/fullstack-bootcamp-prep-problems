// Write a function, arraySum, that accepts an array of numbers as an argument and returns the sum
// of all the numbers in the array (no matter how nested!).

let solveCount = 0;

function arraySum(arr) {
    debugger;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        if (Array.isArray(ele)) {
            sum += arraySum(ele);
        } else sum += ele;
    } return sum;
}

arraySum([1, [2, 3, [4]]]) // => 10