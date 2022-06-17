// Write a function, sumDigits, that sums up all the digits of a number passed in as an argument.
// You can assume that the argument will be a positive integer. Use recursion.

function sumDigits(digits) {
    //change numbers into string
    let digitsString = digits.toString(); 
    //get last digit of string AS A NUMBER
    let lastNum = parseInt(digitsString[digitsString.length - 1]);
    
    //base case -- if there is only one number in digits, return it!
    if (digits < 10) return digits;


    return lastNum + sumDigits(Math.floor(digits / 10));
}

console.log(sumDigits(1234)) // => 10   
