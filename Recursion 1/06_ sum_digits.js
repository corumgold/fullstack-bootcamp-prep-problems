// Write a function, sumDigits, that sums up all the digits of a number passed in as an argument.
// You can assume that the argument will be a positive integer. Use recursion.

let solveCount = 1;

function sumDigits(num) {
    let strNum = num.toString();
    let firstNum = parseInt(strNum[0]);

    if (strNum.length === 1) {
        return firstNum;
    }

    return firstNum + sumDigits(parseInt(strNum.slice(1)));
}

console.log(sumDigits(1234)) // => 10   
