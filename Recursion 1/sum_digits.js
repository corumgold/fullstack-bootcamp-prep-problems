// Write a function, sumDigits, that sums up all the digits of a number passed in as an argument.
// You can assume that the argument will be a positive integer. Use recursion.

function sumDigits(digits) {
    let digitsString = digits.toString();
    let lastNum = parseInt(digitsString[digitsString.length - 1]);
    if (digits < 10) return digits;

    return lastNum += sumDigits(Math.floor(digits / 10));
}

console.log(sumDigits(1234)) // => 10   
